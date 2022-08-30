from rest_framework import serializers
from . import models
import re

class PostSerializer(serializers.ModelSerializer):
    is_ttabong = serializers.SerializerMethodField("ttabong_field")
    
    def ttabong_field(self,post):
        if "request" in self.context:
            user = self.context["request"].user
            return post.ttabong.filter(pk = user.pk).exists()
        return False

    class Meta:
        model = models.Post
        fields = [
            "category",
            "title",
            "image",
            "content",
            "user",
            "is_ttabong"]
        
    


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = "__all__"