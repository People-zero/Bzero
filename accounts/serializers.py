from dataclasses import fields
from pyexpat import model
from re import A
from .models import User, Attendance
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'birth',
                  'email', 'age', 'phone_number', 'first_name', 'last_name', 'is_staff']


class AttendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attendance
        fields = ['id', 'username', 'attended_date']


class CustomRegisterSerializer(RegisterSerializer):
    # 기본 설정 필드: username, password, email
    # 추가 설정 필드: profile_image

    birth = serializers.DateField()
    age = serializers.IntegerField()
    phone_number = serializers.CharField(max_length=30)
    name = serializers.CharField(max_length=30)
    nickname = serializers.CharField(max_length=150)
    is_staff = serializers.BooleanField()

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['birth'] = self.validated_data.get('birth', '')
        data['age'] = self.validated_data.get('age', '')
        data['phone_number'] = self.validated_data.get('phone_number', '')
        data['first_name'] = self.validated_data.get('name', '')
        data['last_name'] = self.validated_data.get('nickname', '')
        data['is_staff'] = self.validated_data.get('is_staff', '')

        return data
