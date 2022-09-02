# Bzero/accounts/urls.py

from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, AttendViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('accounts', UserViewSet)
router.register('attend', AttendViewSet)
router.register('profile', ProfileViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('', include('dj_rest_auth.urls')),
]
