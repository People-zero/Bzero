from .models import User, Attendance, Profile
from rest_framework import viewsets, permissions
from accounts.serializers import UserSerializer, AttendSerializer, ProfileSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from dj_rest_auth.registration.views import RegisterView
from rest_framework import viewsets, status
from django.utils.translation import gettext_lazy as _
import datetime
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


    def list(self, request):
        user = request.user
        queryset = User.objects.filter(username=user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

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
        username = request.user
        attended_date = datetime.date.today()
        if(Attendance.objects.filter(username=username, attended_date=attended_date)):
            return Response({'detail': 'already attend'})
        else:
            data = Attendance(username=username, attended_date=attended_date)
            data.save()
            return Response({'detail': 'successfully attend'})


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    http_method_names = ['get', 'put', 'post', 'delete']  # get method 만을 활용

    def update(self, request, *args, **kwargs):
        try:
            print(request.user)
            profile = Profile.objects.get(username__id=request.user.id)
            self.check_object_permissions(request, profile)
        except Exception as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)
        profile_pic_serializer = self.get_serializer(profile, data=request.data)
        print(request.data)
        if profile_pic_serializer.is_valid():
            profile_pic_serializer.save()
            return Response(profile_pic_serializer.data)
        return Response(
            profile_pic_serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )
        # return super().update(request, *args, **kwargs)
