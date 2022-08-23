from urllib import request
from rest_framework import serializers
from . import models
import re

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ["category","title","image","content","tag_set"]
        
    


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = "__all__"