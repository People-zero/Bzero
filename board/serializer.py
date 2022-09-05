from rest_framework import serializers
from . import models
from accounts.models import User

class PostSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    author_name = serializers.SerializerMethodField()

    def get_author_name(self,request):
        author_name = User.objects.get(id = request.author.id).username
        return author_name
    
    class Meta:
        model = models.Post
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model = models.Comment
        fields = ["post","created_at","updated_at","content","author","id",]


class Post_DetailSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    

    class Meta:
        model = models.Post
        fields = ["id",'comment_set',"created_at", "updated_at","category","content","image","recommend_user_set"]
        read_only_fields = ('comment_set',)



