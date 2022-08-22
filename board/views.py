from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializer import PostSerializer
from . import models
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter


class PostViewSet(ModelViewSet):
    queryset = models.Post.objects.filter(is_public=True)
    serializer_class = PostSerializer

    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    filterset_fields = []
    ordering_fields = ['updated_at', 'recommend_cnt']
    ordering = ['-updated_at']
    search_fields = ['user', 'title', 'content']


# class CommentViewSet(ModelViewSet):
#     queryset = models.Comment.objects.all()
#     serializer_class = CommentSerializer


class DiaryViewSet(ModelViewSet):
    queryset = models.Post.objects.filter(is_public=False)
    serializer_class = PostSerializer
