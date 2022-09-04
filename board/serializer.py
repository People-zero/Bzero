from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    
    class Meta:
        model = models.Post
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model = models.Comment
        fields = ("post","created_at","updated_at","content","author")


class Post_DetailSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    
    class Meta:
        model = models.Post
        fields = ("id",'comment_set',"created_at", "updated_at","category","content","image","recommend_user_set")

