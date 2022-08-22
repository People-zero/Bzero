from urllib import request
from rest_framework import serializers
from . import models
import re

class PostSerializer(serializers.ModelSerializer):

    model = models.Post
    # TODO deserialize 할때 content에 # 붙어있는건 테그로 인식하고
    # 미리 tag_set에 넣기
    def get_tag_set(self):
        tag_set = self.tag_set.add(*self.extract_tag_list())
        return tag_set
    
    class Meta:
        fields = "__all__"
        read_only_fields = ["created_at","updated_at"]
    


class CommentSerializer(serializers.ModelSerializer):
    model = models.Comment
    class Meta:
        fields = "__all__"
        read_only_fields = ["created_at","updated_at"]