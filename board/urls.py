from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .models import Post,Comment,Tag 

router = DefaultRouter()
router.register(r"posts/(?P<post_category>\d+)", views.PostViewSet, basename = Post)
#카테고리로 나누는 게시판 list
router.register(r"tag/(?P<tag_name>[a-zA-Z\dㄱ-힣]+)", views.TagSearchViewSet, basename = Post)
#테그를 이용한 검색글, list 이용
router.register(r"posts/C/(?P<post_pk>\d+)/comments", views.CommentViewSet, basename = Comment)
#개시글에 들어가서 보는 comment의 list


urlpatterns = [
    path("",include(router.urls)),  
]