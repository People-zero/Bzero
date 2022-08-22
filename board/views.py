from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializer import CommentSerializer, PostSerializer
from . import models


class PostViewSet(ModelViewSet):
    queryset = models.Post.objects.filter(is_public=True)
    serializer_class = PostSerializer


# class CommentViewSet(ModelViewSet):
#     queryset = models.Comment.objects.all()
#     serializer_class = CommentSerializer


class DiaryViewSet(ModelViewSet):
    queryset = models.Post.objects.filter(is_public=False)
    serializer_class = PostSerializer
