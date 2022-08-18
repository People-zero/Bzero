from ctypes.wintypes import SIZE
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # First name = name (실명)
    # last_name = nickname (넷상에서 쓰는이름)
    username = models.CharField(max_length=150, unique=True)
    birth = models.DateField(null=True)
    age = models.PositiveIntegerField(null=True)
    phone_number = models.CharField(null=True, max_length=30, unique=True)
    email = models.EmailField(blank=False, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=150, blank=False, unique=True)
    is_staff = models.BooleanField(blank=False, default=False)


class Attendance(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    attended_date = models.DateField()


class Profile(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to='image/', blank=True, null=True)
    intro_comment = models.CharField(max_length=150, blank=True, null=True)
    point = models.IntegerField(default=0)


# Create your models here.
