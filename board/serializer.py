from rest_framework import serializers
from . import models
import re

class PostSerializer(serializers.ModelSerializer):
    
    model = models.Post

    class Meta:
        fields = "__all__"
        read_only_fields = ["created_at","updated_at"]
    


class CommentSerializer(serializers.ModelSerializer):

    model = models.Comment

    class Meta:
        fields = "__all__"
        read_only_fields = ["created_at","updated_at"]