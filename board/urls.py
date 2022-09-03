from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .models import Post,Comment

router = DefaultRouter()

router.register(r"(?P<post_category>\d+)", views.PostViewSet, basename = Post)
#카테고리로 나누는 게시판 list
# router.register(r"tag/(?P<tag_name>[a-zA-Z\dㄱ-힣]+)", views.TagSearchViewSet, basename = Post)
#테그를 이용한 검색글, list 이용
router.register(r"C/(?P<post_pk>\d+)", views.CommentViewSet, basename = Comment)
#개시글에 들어가서 보는 comment의 list


urlpatterns = [
    path("",include(router.urls)),
    path('<int:pk>/recommend/', views.post_recommend, name='post_recommend'),  

#urls 
# local/post/category = 카테고리별 뷰
# local/post/C/post.id = 포스트 아이디에 따른 댓글창
# local/post/post.id/recommend = 좋아요 or 싫어요 (toggle 로 구현)




    path('',views.postListApiView.as_view()),
    path('detail/<int:pk>',views.postDetailApiView.as_view()),
    path('detail/<int:pk>/<int:commentpk>', views.commentDetailApiView.as_view()),
    path('C/<int:category>',views.postCategoryListApiView.as_view()), 
    path('recommend/<int:pk>',views.post_recommend, name = 'post_recommend'),  
]