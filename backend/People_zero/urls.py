# Bzero/People_zero/urls.py

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('main/', TemplateView.as_view(template_name='index.html')),
    path('map/', TemplateView.as_view(template_name='index.html')),
     path('login/', TemplateView.as_view(template_name='index.html')),
     path('calendar/', TemplateView.as_view(template_name='index.html')),
     path('write_diary/', TemplateView.as_view(template_name='index.html')),
     path('diary_detail/2022-09-15', TemplateView.as_view(template_name='index.html')),
    path('post/',include('board.urls')),
    path('store/', include('store.urls')),
    path('auth/', include('accounts.urls')),
    path('clean_store/1', TemplateView.as_view(template_name='index.html')),
    path('frontend/', TemplateView.as_view(template_name='index.html')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
    path('storetest/', include('store.urls')),
    path('post/',include('board.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
