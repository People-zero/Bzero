from django.db import models
from django.conf import settings
from django.utils import timezone
from django.core.validators import RegexValidator

# Create your models here.
class Clean_Store(models.Model):
    store_name = models.CharField(max_length=20)
    store_image = models.ImageField(null=True,blank=True)#TODO: default image 추가
    opening_time = models.CharField(max_length=50)
    store_longtitude = models.DecimalField(max_digits=9, decimal_places=6)
    store_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    phoneNumberRegex = RegexValidator(regex = r"^\+?1?\d{8,15}$")
    telephone = models.CharField(validators = [phoneNumberRegex], max_length = 16, unique = True, null=True)
    description = models.TextField(blank=True)

    def point_avg(self,obj):
        cnt = 0
        total = 0
        for review in Review.objects.filter(pk = Review.store_review):
            cnt += 1
            total += review.point
        return total/cnt

        

    


class Review(models.Model):
    CHOICE_RATE = ((1,"1점"),(2,"2점"),(3,"3점"),(4,"4점"),(5,"5점"))

    comment = models.CharField(max_length = 100)
    point = models.CharField(max_length = 1, choices = CHOICE_RATE)
    store_review = models.ForeignKey(Clean_Store, on_delete = models.CASCADE)
    user_review = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete = models.CASCADE)
    created_at_review = models.DateField(auto_created=timezone.now,editable= False)
    updated_at_review = models.DateField(auto_created=timezone.now)


class Bottle_Collection_Store(models.Model):
    store_name = models.CharField(max_length=20)
    store_image = models.ImageField(null=True,blank=True)#TODO: default image 추가
    bottle_kind = models.CharField(max_length = 100)
    pickup_day =  models.CharField(max_length=15)
    store_longtitude = models.DecimalField(max_digits=9, decimal_places=6)
    store_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    opening_time = models.CharField(max_length=50)
    phoneNumberRegex = RegexValidator(regex = r"^\+?1?\d{8,15}$")
    telephone = models.CharField(validators = [phoneNumberRegex], max_length = 16, unique = True, null=True)
    description = models.TextField(blank=True)