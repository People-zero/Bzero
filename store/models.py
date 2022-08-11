from tkinter import CASCADE
from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.
class Review(models.Model):
    CHOICE_RATE = ((1,"1점"),(2,"2점"),(3,"3점"),(4,"4점"),(5,"5점"))

    comment = models.TextField(row = 3)
    point = models.CharField(max_length = 1, choices = CHOICE_RATE)
    store_review = models.ForeignKey(Store, on_delete = CASCADE)
    user_review = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete = CASCADE)
    created_at_review = models.DateField(auto_created=timezone.now,editable= False)
    updated_at_review = models.DateField(auto_created=timezone.now)