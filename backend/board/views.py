from rest_framework.views      import APIView
from rest_framework.response   import Response
from .models                   import Post,Comment
from .serializers import PostSerializer,CommentSerializer,Post_DetailSerializer
from django.shortcuts import get_object_or_404,redirect
from rest_framework import status
import accounts.models
import datetime

#checked
class postCategoryListApiView(APIView):

    queryset = Post.objects.all()
    serializer_class= PostSerializer
    
    def get(self, request ,category):
        qs = Post.objects.filter(category = category)
        serializer = PostSerializer(qs, many=True)
        return Response(serializer.data)
        

#checked
class postListApiView(APIView):

    queryset = Post.objects.all()
    serializer_class= PostSerializer

    def get(self, request):
        qs = Post.objects.all()
        serializer = PostSerializer(qs, many=True)
        return Response(serializer.data)
        
    def post(self,request):
        if not request.user.is_authenticated:
            return 0
            # return redirect('http://127.0.0.1:8000/auth/login')
        else:
            serializer = PostSerializer(data=request.data)
            if serializer.is_valid():
                if self.request.data["category"] == "1":
                    profile = accounts.models.Profile.objects.get(username = request.user)
                    profile.point += 100
                    profile.save() 
                    attendance,check = accounts.models.Attendance.objects.get_or_create(username = request.user,
                                                                        attended_date = datetime.date.today())
                    if check:
                        attendance.save()
                serializer.save(author=request.user)
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)


class postDetailApiView(APIView):

    def get_object_post(self,pk):
        return Post.objects.filter(pk = pk)

    def get(self, request ,pk):
        self.serializer_class = CommentSerializer
        post = self.get_object_post(pk) 
        serializer = Post_DetailSerializer(post,many= True)
        return Response(serializer.data)
    
    def post(self,request,pk):
        self.serializer_class = CommentSerializer
        if not request.user.is_authenticated:
            return redirect('http://127.0.0.1:8000/auth/login')
        else:
            serializer = CommentSerializer(data=request.data)
            if serializer.is_valid():
                post = accounts.models.User.objects.get(pk = pk)
                serializer.save(author=request.user,post = post)
                return Response(serializer.data, status=201)
            else:
                return Response(serializer.errors, status=400)


class postRetrieveApiView(APIView):
    
    def get_object_post(self,pk):
        return Post.objects.filter(pk = pk)

    def get(self,request, pk):
        self.serializer_class = PostSerializer
        post = self.get_object_post(pk) 
        serializer = Post_DetailSerializer(post,many= True)
        return Response(serializer.data)

    def put(self,request, pk):
        self.serializer_class = Post_DetailSerializer
        if not request.user.is_authenticated:
            return redirect('http://127.0.0.1:8000/auth/login')
        else:
            post = self.get_object_post(pk).first()
            serializer = PostSerializer(post,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
    def delete(self,request,pk):
        self.serializer_class = Post_DetailSerializer
        if not request.user.is_authenticated:
            return redirect('http://127.0.0.1:8000/auth/login')
        else:
            post = self.get_object_post(pk)
            post.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        


class commentDetailApiView(APIView):

    queryset = Comment.objects.all()
    serializer_class= CommentSerializer

    def get_object(self,pk,commentpk):
        return Comment.objects.filter(post = pk, pk=commentpk)
    
    def get(self, request ,pk,commentpk):
        comment = self.get_object(pk,commentpk)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
    
        
    def put(self,request, pk,commentpk):
        if not request.user.is_authenticated:
            return redirect('http://127.0.0.1:8000/auth/login')
        else:
            comment = self.get_object(pk,commentpk).first()
            serializer = CommentSerializer(comment, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
    def delete(self,request,pk,commentpk):
        if not request.user.is_authenticated:
            return redirect('http://127.0.0.1:8000/auth/login')
        else:
            comment = self.get_object(pk,commentpk)
            comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)


def post_recommend(request,pk):
    post = get_object_or_404(Post, pk=pk)
    if request.user in post.recommend_user_set.all():
        post.recommend_user_set.remove(request.user)
    else:
        post.recommend_user_set.add(request.user)
    return redirect('http://127.0.0.1:8000/post/detail/'+str(pk))