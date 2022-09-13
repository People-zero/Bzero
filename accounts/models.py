from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver

class User(AbstractUser):
    # First name = name (실명)
    # last_name = nickname (넷상에서 쓰는이름)
    username = models.CharField(max_length=150, unique=True, blank=True)
    birth = models.DateField(null=True)
    age = models.PositiveIntegerField(null=True)
    phone_number = models.CharField(null=True, max_length=30, unique=True)
    email = models.EmailField(blank=False, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=150, blank=False, unique=True)
    is_staff = models.BooleanField(blank=False, default=False)
    gender = models.CharField(verbose_name='성별', max_length=1, null=True)
    point = models.IntegerField(default=0)
    def __str__(self) -> str:
        return (self.username)
    

class Attendance(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    attended_date = models.DateField()
    def __str__(self) ->str:
        return (self.attended_date)

class Profile(models.Model):
    username = models.OneToOneField(User, on_delete=models.CASCADE, default="")
    profile_image = models.ImageField(upload_to='image/', default="")
    intro_comment = models.CharField(max_length=150, default="")
    point = models.IntegerField(default=0)
    

# Create your models here.


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(username=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
