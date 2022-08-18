from django.db import models
# from accounts.models import User


class Post(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    recommend_cnt = models.IntegerField(default=0)
    is_public = models.BooleanField()


class Tag(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    tag_name = models.CharField(max_length=10)


class Comment(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    content = models.TextField()
