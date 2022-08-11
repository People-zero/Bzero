from dataclasses import fields
from pyexpat import model
from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'birth',
                  'email', 'age', 'phone_number', 'first_name', 'last_name', 'is_staff']
