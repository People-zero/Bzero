from rest_framework import serializers
from . import models
from accounts.models import User
from drf_extra_fields.fields import Base64ImageField

class PostSerializer(serializers.ModelSerializer):
    image = Base64ImageField()
    author_name = serializers.SerializerMethodField()
    def get_author_name(self,request):
        author_name = User.objects.get(id = request.author.id).username
        return author_name
    
    class Meta:
        model = models.Post
        fields = "__all__"
        read_only_fields = ("created_at","updated_at","recommend_user_set","author","author_name",)

class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    def get_author_name(self,request):
        author_name = User.objects.get(id = request.author.id).username
        return author_name

    class Meta:
        model = models.Comment
        fields = "__all__"
        read_only_fields = ("created_at","updated_at","author","post","author_name",)


class Post_DetailSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = models.Post
        fields = "__all__"
        read_only_fields = ('comment_set',"created_at","updated_at","author","recommend_user_set","author_name",)



