from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from Bzero.board.serializer import CommentSerializer, PostSerializer
from . import models
from rest_framework.generics import get_object_or_404

class PostViewSet(ModelViewSet):

    queryset = models.Post.objects.all()
    # TODO 쿼리셋 받아올때 로그인된 유저거만 가져오는거

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.filter()
        # TODO 쿼리셋 받아올때 필터링 해야해요
        return qs

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    def perform_create(self, serializer):
        serializer.save(author = self.request.user)
        return super().perform_create(serializer)

    serializer_class = PostSerializer

    

class CommentViewSet(ModelViewSet):

    queryset = models.Comment.objects.all()

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.filter(post__pk=self.kwargs["post_pk"])
        return qs

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    def perform_create(self, serializer):
        post = get_object_or_404(models.Post, pk=self.kwargs["post_pk"])
        serializer.save(author=self.request.user, post=post)
        return super().perform_create(serializer)

    serializer_class = CommentSerializer


