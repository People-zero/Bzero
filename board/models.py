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
    CATEGORY_CHOICES = ((1,"공개글"),(2,"일기장"),(3,"정보공유글"))
    category = models.IntegerField(choices =CATEGORY_CHOICES)
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True)
    recommend_cnt = models.IntegerField(default=0)
    tag_set = models.ManyToManyField("Tag", blank=True)
   
    #FIXME 일단 content에서 (POST객체에서 분리) 테그를 분리하여 list로 만들어주는
    #함수입니다.. 왜 안될까..마음이 너무나 아파버려...
    def extract_tag_list(self):
        tag_name_list = re.findall(r"#([a-zA-Z\dㄱ-힣]+)",self.content)
        tag_list = []
        for tag_name in tag_name_list:
            tag,_ = models.Tag.objects.get_or_create(name=tag_name)
            tag_list.append(tag)
        return tag_list

    class Meta:
        ordering = ["-id"] # 최신순 정렬
    

    

class Tag(TimestampAbstractModel):
    name = models.CharField(max_length = 30, primary_key=True)

class Comment(TimestampAbstractModel):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()

    class Meta:
        ordering = ["-id"]
