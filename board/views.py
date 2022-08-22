from django.shortcuts import redirect, get_object_or_404
from rest_framework.viewsets import ModelViewSet
from .serializer import CommentCreateSerializer, CommentSerializer, PostSerializer
from . import models
from accounts.models import Profile
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
    if request.user in post.recommend_user_set.all():
        post.recommend_user_set.remove(request.user)
    else:
        post.recommend_user_set.add(request.user)
    return redirect('http://127.0.0.1:8000/board/post')


class DiaryViewSet(ModelViewSet):
    queryset = models.Post.objects.filter(is_public=False)
    serializer_class = PostSerializer


class CommentViewSet(ModelViewSet):
    queryset = models.Comment.objects.all()
    # permission_classes = [CustomReadOnly]

    def get_serializer_class(self):
        if self.action == 'list' or 'retrieve':
            return CommentSerializer
        return CommentCreateSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(author=self.request.user, profile=profile)
