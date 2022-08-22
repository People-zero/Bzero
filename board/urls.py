from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"posts/(?P<post_category>\d+)", views.PostViewSet)
#카테고리로 나누는 게시판 list
router.register(r"posts/(?P<post_pk>\d+)/comments", views.CommentViewSet)
#개시글에 들어가서 보는 comment의 list
router.register(r"posts/#(?P<tag_pk>\d)",views.TagSearchAPIView.as_view())
#테그를 이용한 검색글, list 이용

urlpatterns = [
    path("/",include(router.urls))
]