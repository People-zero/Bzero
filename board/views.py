from gc import get_objects
from rest_framework.views      import APIView
from rest_framework.response   import Response
from .models                   import Post,Comment
from .serializer import PostSerializer,CommentSerializer,Post_DetailSerializer
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404,redirect
from rest_framework import status
import accounts.models
import datetime


class postCategoryListApiView(APIView):
    

    def get(self, request ,category):
        if category == 1:
            qs = Post.objects.filter(author = request.user)
        else:
            qs = Post.objects.filter(category = category)
        serializer = PostSerializer(qs, many=True)
        return Response(serializer.data)
        


class postListApiView(APIView):


    def get(self, request):
        qs = Post.objects.all()
        serializer = PostSerializer(qs, many=True)
        return Response(serializer.data)
        
    
    # when creating post
    # 1. increasing point from accounts/model.profile.point
    # 2. add now() at accounts/model.Attendance.attended_date
    @login_required
    def post(self,request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            profile = accounts.models.Profile.objects.get(id = request.user.id)
            profile.point += 100
            profile.save() 
            attendance,check = accounts.models.Attendance.objects.get_or_create(id = request.user.id,
                                                                username = request.user,
                                                                attended_date = datetime.date.today())
            if check:
                attendance.save()
            else:
                pass
            serializer.save(author=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)



#디테일 뷰
class postDetailApiView(APIView):

    def get_object_post(self,pk):
        return Post.objects.filter(pk = pk)

    def get(self, request ,pk):
        post = self.get_object_post(pk) 
        serializer = Post_DetailSerializer(post, many=True)
        return Response(serializer.data)
        
    @login_required
    def put(self,request, pk):
        post = self.get_object_post(pk)
        serializer = Post_DetailSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
    @login_required
    def delete(self,request,pk):
        post = self.get_object_post(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class commentDetailApiView(APIView):

    def get_object(self,pk,commentpk):
        return Comment.objects.filter(post = pk, pk=commentpk)
    
    def get(self, request ,pk,commentpk):
        comment = self.get_object(pk,commentpk)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
        
    @login_required
    def put(self,request, pk,commentpk):
        comment = self.get_object(pk,commentpk)
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
    @login_required
    def delete(self,request,pk,commentpk):
        comment = self.get_objects(pk,commentpk)
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def post_recommend(request,pk):
    post = get_object_or_404(Post, pk=pk)
    if request.user in post.recommend_user_set.all():
        post.recommend_user_set.remove(request.user)
    else:
        post.recommend_user_set.add(request.user)
    return redirect('http://127.0.0.1:8000/post/detail/'+str(pk))

