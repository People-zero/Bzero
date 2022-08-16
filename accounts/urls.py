# Bzero/accounts/urls.py

from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, AttendViewSet

router = routers.DefaultRouter()
router.register('accounts', UserViewSet)
router.register('attend', AttendViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('', include('dj_rest_auth.urls')),
]
