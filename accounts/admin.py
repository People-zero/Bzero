from django.contrib import admin

from .models import Attendance, User, Profile


class userAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'password', 'birth',
                    'email', 'age', 'phone_number', 'gender')


admin.site.register(User, userAdmin)


class attendanceAdmin(admin.ModelAdmin):
    list_display = ('username', 'attended_date')


admin.site.register(Attendance, attendanceAdmin)

class profileAdmin(admin.ModelAdmin):
    list_display = ('username','profile_image', 'intro_comment', 'point')

admin.site.register(Profile, profileAdmin)

# Register your models here.
