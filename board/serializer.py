from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
    model = models.Post
    class Meta:
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    model = models.Comment
    class Meta:
        fields = "__all__"