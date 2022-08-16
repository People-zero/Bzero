from django.shortcuts import render
from .models import User, Attendance
from rest_framework import viewsets, permissions
from accounts.serializers import UserSerializer, AttendSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    # def list(self, request):
    #     user = request.user
    #     queryset = User.objects.filter(username=user)
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)


class AttendViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        user = request.user
        queryset = Attendance.objects.filter(username=user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        date = request
        user = request.uesr
        if(Attendance.objects.filter(date=date)):
            return
        else:
            data = Attendance(username=user, attended_date=date)
            data.save()
