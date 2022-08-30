from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.viewsets import ModelViewSet
from .serializer import CommentSerializer, PostSerializer
from .models import Post,Tag,Comment
import re
from rest_framework.generics import get_object_or_404
from rest_framework.decorators import action
from django.contrib.auth.decorators import login_required
from rest_framework import status


class PostViewSet(ModelViewSet):
    serializer_class= PostSerializer
    queryset = Post.objects.all()
    def get_queryset(self):
        qs = super().get_queryset()
        if self.kwargs["post_category"] == "2" or self.kwargs["post_category"] == "3" or self.kwargs["post_category"] == "4" or self.kwargs["post_category"] == "5" : # 정보공유,공개,인증사진
            qs = qs.filter(category = self.kwargs["post_category"])
        else:                                        # 일기장
            qs = qs.filter(author = self.request.user)
        return qs

    def get_serializer_context(self): # 보내줄때
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    def extract_tag_list(self):
        tag_name_list = re.findall(r"#([a-zA-Z\dㄱ-힣]+)",self.request.data.get("content"))
        tag_list = [Tag.objects.get_or_create(name=tag_name)[0]for tag_name in tag_name_list]
        return tag_list

    @action(detail=True, methods=["POST"])
    def like(self):
        post = self.get_object()
        post.ttabong.add(self.request.user)
        return Response(status.HTTP_201_CREATED)

    @like.mapping.delete
    def unlike(self):
        post = self.get_object()
        post.ttabong.remove(self.request.user)
        return Response(status.HTTP_204_NO_CONTENT)

    def perform_create(self, serializer): #저장할때
        serializer.save(author = self.request.user)
        serializer.validated_data["tag_set"]+=(self.extract_tag_list())
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
        serializer.save(author = self.request.user,post=post)
        return super().perform_create(serializer)

class TagSearchViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class= PostSerializer
    
    def get_queryset(self):
        answer = Tag.objects.filter(name=self.kwargs["tag_name"])
        qs = super().get_queryset()
        qs = qs.filter(tag_set__in = answer)
        return qs

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    