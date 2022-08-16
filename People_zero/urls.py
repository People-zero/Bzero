from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.urls')),
    path('frontend/', TemplateView.as_view(template_name='index.html')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('test1/', include('accounts.urls'))
]
