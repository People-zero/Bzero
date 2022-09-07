from faulthandler import disable
from django.db import models
from django.conf import settings
from django.utils import timezone
from django.core.validators import RegexValidator

# Create your models here.
class Clean_Store(models.Model):
    store_name = models.CharField(max_length=20)
    store_image = models.ImageField(null=True,blank=True)#TODO: default image 추가
    store_url = models.URLField(null=True)
    opening_time = models.CharField(max_length=50)
    address = models.TextField(blank=True,default="")
    store_longtitude = models.DecimalField(max_digits=9, decimal_places=6)
    store_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    phoneNumberRegex = RegexValidator(regex = r"^\+?1?\d{8,15}$")
    telephone = models.CharField(validators = [phoneNumberRegex], max_length = 16, unique = True, null=True)
    description = models.TextField(blank=True)
    point_avg = models.DecimalField(blank=True,null=True, max_digits=9,decimal_places=9)


class Review(models.Model):
    CHOICE_RATE = (('1',"1점"),('2',"2점"),('3',"3점"),('4',"4점"),('5',"5점"))

    comment = models.CharField(max_length = 100)
    point = models.CharField(max_length = 1, choices = CHOICE_RATE)
    store_review = models.ForeignKey(Clean_Store, on_delete = models.CASCADE)
    user_review = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete = models.CASCADE)
    created_at_review = models.DateField(auto_now_add=True,editable= False, null=True)
    updated_at_review = models.DateField(auto_now=True,blank=True)


class Bottle_Collection_Store(models.Model):
    store_name = models.CharField(max_length=20)
    store_image = models.ImageField(null=True,blank=True)#TODO: default image 추가
    store_url = models.URLField(null=True)
    bottle_kind = models.CharField(max_length = 100)
    pickup_day =  models.CharField(max_length=15)
    address = models.TextField(blank=True)
    store_longtitude = models.DecimalField(max_digits=9, decimal_places=6)
    store_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    opening_time = models.CharField(max_length=50)
    phoneNumberRegex = RegexValidator(regex = r"^\+?1?\d{8,15}$")
    telephone = models.CharField(validators = [phoneNumberRegex], max_length = 16, unique = True, null=True)
    description = models.TextField(blank=True)