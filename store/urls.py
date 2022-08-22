from decimal import Clamped
from email.mime import base
from django.urls import path, include

from .models import Bottle_Collection_Store, Clean_Store, Review
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("clean_store/",views.Clean_StoreViewSet, basename=Clean_Store)
router.register("bottle_collection_Store/",views.Bottle_Collection_StoreViewSet, basename=Bottle_Collection_Store)
router.register(r"clean_store/(?P<clane_store_pk>\d+)/reviews",views.ReviewViewSet, basename=Review)

urlpatterns = [
    path("/",include(router.urls)),
    # path('store/', TestStoreListAPIView.as_view()),
    # path('store_detail/<int:pk>', TestStoreDetailAPIView.as_view()),
    # path('review/', TestReviewAPIView.as_view()),
]