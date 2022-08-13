from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("clean_store",views.Clean_StoreViewSet)
router.register("bottle_collection_Store",views.Bottle_Collection_StoreViewSet)
router.register(r"clean_store/(?P<clane_store_pk>\d+/reviews",views.ReviewViewSet)

urlpatterns = [
    path("",include(router.urls)),
    # path('store/', TestStoreListAPIView.as_view()),
    # path('store_detail/<int:pk>', TestStoreDetailAPIView.as_view()),
    # path('review/', TestReviewAPIView.as_view()),
]