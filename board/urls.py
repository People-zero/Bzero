from rest_framework.routers import DefaultRouter
from . import views
from . import models
from django.urls import path, include


router = DefaultRouter()
router.register("post", views.PostViewSet, basename=models.Post)
router.register("diary", views.DiaryViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('post/<int:pk>/recommend/', views.post_recommend, name='post_recommend'),
    path('post/<int:pk>/unrecommend/',
         views.post_unrecommend, name='post_unrecommend'),
]
