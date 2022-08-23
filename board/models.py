from django.db import models
import re
# from accounts.models import User

class TimestampAbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now= True)

    class Meta:
        abstract = True
    #time 모델 만들어서 시간 만들어놓고 이거 상속해서 이용할게요

class Post(TimestampAbstractModel):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    CATEGORY_CHOICES = ((1,"공개글"),(2,"일기장"),(3,"정보공유글"),(4,"인증사진"),(5,"질문글"))
    category = models.IntegerField(choices =CATEGORY_CHOICES)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True)
    recommend_cnt = models.IntegerField(default=0)
    tag_set = models.ManyToManyField("Tag",blank = True,related_name="tagiing")
    
    # def __str__(self):
    #     return self.title

    class Meta:
        ordering = ["-id"] # 최신순 정렬
    

    

class Tag(TimestampAbstractModel):
    name = models.CharField(max_length = 30,unique=True)

    # def __str__(self):
    #     return self.name

class Comment(TimestampAbstractModel):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()

    # def __str__(self):
    #     return self.content

    class Meta:
        ordering = ["-id"]
