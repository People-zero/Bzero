from .models import User, Attendance, Profile
from rest_framework import viewsets, permissions, generics
from accounts.serializers import UserSerializer, AttendSerializer, ProfileSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    http_method_names = ['get', 'patch']  # get method 만을 활용

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
        attended_date = request.POST['attended_date']
        if(Attendance.objects.filter(username=username, attended_date=attended_date)):
            return Response({'a': 'a'})
        else:
            data = Attendance(username=username, attended_date=attended_date)
            data.save()
            return Response({'b': 'b'})


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    # http_method_names = ['get', 'patch', 'post', 'delete']  # get method 만을 활용
