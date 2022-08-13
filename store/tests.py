from django.test import TestCase
from rest_framework import serializers
from .models import Store,Review
class TestStoreSerializer(serializers.ModelSerializer):
     class Meta:
        model = Store
        fields = '__all__'

class TestReviewSerializer(serializers.ModelSerializer):
     class Meta:
        model = Review
        fields = '__all__'
