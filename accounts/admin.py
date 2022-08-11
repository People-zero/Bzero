from django.contrib import admin

from .models import User


class userAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'password', 'birth',
                    'email', 'age', 'phone_number')


admin.site.register(User, userAdmin)
# Register your models here.
