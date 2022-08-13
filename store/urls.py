from django.urls import path, include
from .views import TestStoreListAPIView, TestStoreDetailAPIView,TestReviewAPIView


urlpatterns = [
    path('store/', TestStoreListAPIView.as_view()),
    path('store_detail/<int:pk>', TestStoreDetailAPIView.as_view()),
    path('review/', TestReviewAPIView.as_view()),
]