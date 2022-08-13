from django.test import TestCase
from rest_framework import serializers
from .models import Store,Review
class TestStoreSerializer(serializers.ModelSerializer):
     class Meta:
        model = Store
        fields = ('id', 'store_name', 'opening_time', 'store_longtitude', 'store_latitude', 'telephone','description', 'point_avg')

class TestReviewSerializer(serializers.ModelSerializer):
     class Meta:
        model = Review
        fields = '__all__'
