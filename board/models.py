
from django.db import models
from django.conf import settings


# from accounts.models import User

class TimestampAbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now= True)

    class Meta:
        abstract = True
    #time 모델 만들어서 시간 만들어놓고 이거 상속해서 이용할게요

class Post(TimestampAbstractModel):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    author_name = models.CharField(max_length = 150)
    CATEGORY_CHOICES = ((1,"일기장"),(2,"함께해요"),(3,"궁금해요"),(4,"인증사진"),(5,"정보광장"))
    category = models.IntegerField(choices =CATEGORY_CHOICES)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True)
    recommend_user_set = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name= "ttabong")


    class Meta:
        ordering = ["-id"] # 최신순 정렬
    

    


class Comment(TimestampAbstractModel):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name= 'comment')
    author_name = models.CharField(max_length = 150)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()

    class Meta:
        ordering = ["-id"]