from django.db import models
# from accounts.models import User
from django.conf import settings


class Post(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='my_post_set', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    recommend_user_set = models.ManyToManyField(
        settings.AUTH_USER_MODEL, blank=True)
    is_public = models.BooleanField()
    tag_set = models.ManyToManyField('Tag', blank=True)


class Tag(models.Model):
    tag_name = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.tag_name


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(
        Post, related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
