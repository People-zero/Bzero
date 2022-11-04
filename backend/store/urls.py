from decimal import Clamped
from email.mime import base
from django.urls import path, include

from .models import Bottle_Collection_Store, Clean_Store, Review
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("clean_store",views.Clean_StoreViewSet, basename=Clean_Store)
router.register("bottle_collection_Store",views.Bottle_Collection_StoreViewSet, basename=Bottle_Collection_Store)
router.register(r"clean_store/(?P<clean_store_pk>\d+)/reviews",views.ReviewViewSet, basename=Review)

urlpatterns = [
    path("",include(router.urls)),
]