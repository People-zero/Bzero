from django.db import models
import re
# from accounts.models import User

class TimestampAbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add= True, editable=False)
    updated_at = models.DateTimeField(auto_now_add= True, editable=False)

    class Meta:
        abstract = True
    #time 모델 만들어서 시간 만들어놓고 이거 상속해서 이용할게요

class Post(TimestampAbstractModel):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    CATEGORI_CHOICES = (("일기장",1),("정보공유글",2))
    category = models.IntegerField(maxlength = 1,choices =CATEGORI_CHOICES)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True)
    recommend_cnt = models.IntegerField(default=0)
    is_public = models.BooleanField()
    # tag_set = models.ManyToManyField("Tag", blank=True)
    # 이렇게 테그셋을 넣어서 포스트에서 테그를 관리하는건 어떨까요?
    # def extract_tag_list(self):
    #     tag_name_list = re.findall(r"#([a-zA-Z\dㄱ-힣]+)", self.caption)
    #     tag_list = []
    #     for tag_name in tag_name_list:
    #         tag, _ = Tag.objects.get_or_create(name=tag_name)
    #         tag_list.append(tag)
    #     return tag_list
    # 이걸로 가져오는 테그를 "#" 과 분리해서 보관이 가능할거 같은뎅

    class Meta:
        ordering = ["-id"]

class Tag(TimestampAbstractModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class Comment(TimestampAbstractModel):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()

    class Meta:
        ordering = ["-id"]
