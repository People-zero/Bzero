from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Post
        fields = [
            "category",
            "title",
            "image",
            "content",
            "author",
            "recommend_user_set"
            ]
        
    


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = "__all__"