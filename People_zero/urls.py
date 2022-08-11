from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from accounts import views

router = routers.DefaultRouter()
router.register(r'accounts', views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.urls')),
    path('frontend/', TemplateView.as_view(template_name='index.html')),
    path('accounts/', include(router.urls))
]
