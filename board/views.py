from django.shortcuts import redirect, get_object_or_404
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


def post_recommend(request, pk):
    post = get_object_or_404(models.Post, pk=pk)
    post.recommend_user_set.add(request.user)
    return redirect('http://127.0.0.1:8000/board/post')


def post_unrecommend(request, pk):
    post = get_object_or_404(models.Post, pk=pk)
    post.recommend_user_set.remove(request.user)
    return redirect('http://127.0.0.1:8000/board/post')


# class CommentViewSet(ModelViewSet):
#     queryset = models.Comment.objects.all()
#     serializer_class = CommentSerializer


class DiaryViewSet(ModelViewSet):
    queryset = models.Post.objects.filter(is_public=False)
    serializer_class = PostSerializer
