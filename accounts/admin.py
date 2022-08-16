from django.contrib import admin

from .models import Attendance, User


class userAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'password', 'birth',
                    'email', 'age', 'phone_number')


admin.site.register(User, userAdmin)


class attendanceAdmin(admin.ModelAdmin):
    list_display = ('username', 'attended_date')


admin.site.register(Attendance, attendanceAdmin)


# Register your models here.
