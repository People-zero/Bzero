from rest_framework import serializers
from . import models


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    tag_set = TagSerializer(many=True)

    class Meta:
        model = models.Post
        fields = ('user', 'title', 'content', 'image', 'created_at', 'updated_at',
                  'recommend_user_set', 'is_public', 'tag_set', 'comments')
