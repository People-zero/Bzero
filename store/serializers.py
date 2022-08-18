from django.test import TestCase
from rest_framework import serializers
from .models import Clean_Store,Review


class Clean_StoreSerializer(serializers.ModelSerializer):
   pass

class ReviewSerializer(serializers.ModelSerializer):
   pass

class Bottle_Collections_StoreSerializer(serializers.ModelSerializer):
   pass






# class TestStoreSerializer(serializers.ModelSerializer):
#      class Meta:
#         model = Clean_Store
#         fields = ('id', 'store_name', 'opening_time', 'store_longtitude', 'store_latitude', 'telephone','description', 'point_avg')

# class TestReviewSerializer(serializers.ModelSerializer):
#      class Meta:
#         model = Review
#         fields = '__all__'
