from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .serializer import CommentSerializer, PostSerializer
from .models import Post,Tag,Comment
import re
from rest_framework.generics import get_object_or_404

class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        if self.kwargs["category"] == 1 or self.kwargs["category"] == 3: # 정보공유,공개
            qs = qs.filter(category = self.kwargs["category"])
        else:                                        # 일기장
            qs = qs.filter(user = self.request.user)
        return qs

    def get_serializer_context(self): # 보내줄때
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    def extract_tag_list(self):
        tag_name_list = re.findall(r"#([a-zA-Z\dㄱ-힣]+)",self.request.data["content"])
        tag_list = []
        for tag_name in tag_name_list:
            tag,_ = Tag.objects.get_or_create(name=tag_name)
            tag_list.append(tag)
            return tag_list

    def perform_create(self, serializer): #저장할때
        self.request.data["tag_set"].add(*self.extract_tag_list())
        serializer.save(author = self.request.user)
        return super().perform_create(serializer)


class CommentViewSet(ModelViewSet):

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.filter(post__pk=self.kwargs["post_pk"])
        return qs

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    def perform_create(self, serializer):
        post = get_object_or_404(Post, pk=self.kwargs["post_pk"])
        serializer.save(author=self.request.user, post=post)
        return super().perform_create(serializer)


class TagSearchViewSet(ModelViewSet):
    def list(self,request):
        post = Post.objects.filter(tag_set__in=self.kwargs["tag_pk"])
        serializer = PostSerializer(post, many = True)
        return Response(serializer.data)