from distutils.command import clean
from django.test import TestCase
from rest_framework import serializers
from .models import Clean_Store,Review,Bottle_Collection_Store
from drf_extra_fields.fields import Base64ImageField
from accounts.models import User


class Clean_StoreSerializer(serializers.ModelSerializer):
   point_avg = serializers.SerializerMethodField("get_point_avg")
   store_image = Base64ImageField()

   def get_point_avg(self,clean_store):
      cnt = 0
      total = 0
      for review in Review.objects.filter(store_review__pk= clean_store.pk ):
          cnt += 1
          total += int(review.point)
      if cnt != 0:
         point_avg=total/cnt
      else:
         point_avg = 0
      return point_avg

   class Meta:
      model = Clean_Store
      fields = ['pk','store_name', 'store_image', 'opening_time', 'store_longtitude', 'store_latitude', 'telephone', 'description','point_avg','address','store_url']
      read_only_fields = ['point_avg']
      

   
      
class ReviewSerializer(serializers.ModelSerializer):
   user_review_name = serializers.SerializerMethodField()

   def get_user_review_name(self,request):
      obj = User.objects.get(id= request.user_review.id).username
      return obj

   class Meta:
      model = Review
      fields = "__all__"

class Bottle_Collection_StoreSerializer(serializers.ModelSerializer):
   store_image = Base64ImageField()
   class Meta:
      model = Bottle_Collection_Store
      fields = "__all__"


