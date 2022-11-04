from django.urls import path, include
from . import views



urlpatterns = [
    path('',views.postListApiView.as_view()),
    
    path('detail/<int:pk>',views.postDetailApiView.as_view()),
    
    path('detail/retrieve/<int:pk>',views.postRetrieveApiView.as_view()),
    
    path('detail/<int:pk>/<int:commentpk>', views.commentDetailApiView.as_view()),
    
    path('C/<int:category>',views.postCategoryListApiView.as_view()), 

    path('recommend/<int:pk>',views.post_recommend, name = 'post_recommend'),  
]
