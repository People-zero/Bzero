from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
    ttabong_cnt = serializers.SerializerMethodField()
    ssangttabong = serializers.SerializerMethodField()

    def get_ssangttabong(self,post):
        if "request" in self.context:
            user = self.context["request"].user
            return post.ttabong.filter(pk = user.pk).exists()
        return False

    def get_ttabong_cnt(self,post):
        if "request" in self.context:
            user = self.context["request"].user
            return post.ttabong.count(pk = user.pk).exists()
        return False

    class Meta:
        model = models.Post
        fields = [
            "category",
            "title",
            "image",
            "content",
            "user",
            "ssangttabong",
            "ttabong_cnt"
            ]
        
    


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = "__all__"