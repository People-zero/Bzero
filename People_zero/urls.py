# Bzero/People_zero/urls.py

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.urls')),
    path('frontend/', TemplateView.as_view(template_name='index.html')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
<<<<<<< HEAD
    path('post/',include('board.urls')),
    path('store/', include('store.urls')),
    path('auth/', include('accounts.urls'))

=======
    path('test1/', include('accounts.urls')),
    path('storetest/', include('store.urls')),
    path('post/',include('board.urls')),
>>>>>>> f659e16b91ac0931475f62735bacd6f8757f81d5
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

