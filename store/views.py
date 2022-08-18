from http.client import HTTPResponse
from posixpath import basename
from urllib import request, response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Clean_Store,Review,Bottle_Collection_Store
from . import serializers
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.viewsets import ModelViewSet


# Create your views here.
# class TestStoreListAPIView(APIView):
#     def get(self,request):
#         qs = Clean_Store.objects.all()
#         serializer = TestStoreSerializer(qs,many = True)
#         return Response(serializer.data)
#     def post(selfrequest):
#         serializer = TestStoreSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status = 201)
#         return Response(serializer.errors,status = 400)

# class TestStoreDetailAPIView(APIView):
#     def get_object(self,pk):
#         return Clean_Store.objects.get(pk=pk)

#     def get(self, request, pk):
#         store = self.get_object(pk)
#         serializer = TestStoreSerializer(store)
#         return Response(serializer.data)
    
#     def put(self, request, pk):
#         store = self.get_object(pk)
#         serializer = TestStoreSerializer(store, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk):
#         store = self.get_object(pk)
#         store.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# class TestReviewAPIView(APIView):
#     def get(self,request):
#         qs = Review.objects.all()
#         serializer = TestReviewSerializer(qs,many = True)
#         return Response(serializer.data)
#     def post(self,request):
#         serializer = TestReviewSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status = 201)
#         return Response(serializer.errors,status = 400)

class Clean_StoreViewSet(ModelViewSet):
    queryset =  (Clean_Store.objects.all())
    serializer_class = serializers.Clean_StoreSerializer


    # def perform_create(self, serializer):
    #     return super().perform_create(serializer)

class ReviewViewSet(ModelViewSet):
    queryset = (
        Review.objects.all()
    )
    serializer_class = serializers.ReviewSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        print("안녕: ",self.kwargs)
        qs = qs.filter(store_review__pk=self.kwargs["clean_store_pk"])
        return qs

class Bottle_Collection_StoreViewSet(ModelViewSet):
    queryset = (
        Bottle_Collection_Store.objects.all()
    )
    serializer_class = serializers.Bottle_Collection_StoreSerializer
