from distutils.command import clean
from django.test import TestCase
from rest_framework import serializers
from .models import Clean_Store,Review,Bottle_Collection_Store


class Clean_StoreSerializer(serializers.ModelSerializer):
   point_avg = serializers.SerializerMethodField("get_point_avg")
   def get_point_avg(self,clean_store):
      cnt = 0
      total = 0
      for review in Review.objects.filter(store_review__pk= clean_store.pk ):
          cnt += 1
          total += int(review.point)
      point_avg=total/cnt
      return point_avg

   class Meta:
      model = Clean_Store
      fields = ['pk','store_name', 'store_image', 'opening_time', 'store_longtitude', 'store_latitude', 'telephone', 'description','point_avg']
      read_only_fields = ['point_avg']
      

   
      
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
