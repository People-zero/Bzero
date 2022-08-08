from django.db import models

# Create your models here.

class Review(models.Model):
    title=models.CharField(max_length=50)
    content=models.TextField()
    updated_at=models.DateTimeField(auto_now=True)

# 이거 샘플임 얘들아
