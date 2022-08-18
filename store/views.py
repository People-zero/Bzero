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
