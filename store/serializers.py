from django.test import TestCase
from rest_framework import serializers
from .models import Clean_Store,Review,Bottle_Collection_Store


class Clean_StoreSerializer(serializers.ModelSerializer):
   class Meta:
      model = Clean_Store
      fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
   class Meta:
      model = Review
      fields = "__all__"

class Bottle_Collection_StoreSerializer(serializers.ModelSerializer):
   class Meta:
      model = Bottle_Collection_Store
      fields = "__all__"




# class TestStoreSerializer(serializers.ModelSerializer):
#      class Meta:
#         model = Clean_Store
#         fields = ('id', 'store_name', 'opening_time', 'store_longtitude', 'store_latitude', 'telephone','description', 'point_avg')

# class TestReviewSerializer(serializers.ModelSerializer):
#      class Meta:
#         model = Review
#         fields = '__all__'
