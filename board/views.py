from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from Bzero.board.serializer import CommentSerializer, PostSerializer
from . import models

class PostViewSet(ModelViewSet):
    queryset = models.Post.object.all()
    serializer_class = PostSerializer
class CommentViewSet(ModelViewSet):
    queryset = models.Comment.object.all()
    serializer_class = CommentSerializer


