from rest_framework.routers import DefaultRouter
from . import views
from . import models
from django.urls import path, include


router = DefaultRouter()
router.register("post", views.PostViewSet, basename=models.Post)
router.register("diary", views.DiaryViewSet)
router.register("comments", views.CommentViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('post/<int:pk>/recommend/', views.post_recommend, name='post_recommend'),
]
