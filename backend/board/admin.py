from django.contrib import admin
from . import models


@admin.register(models.Post)
class postAdmin(admin.ModelAdmin):
    pass

@admin.register(models.Comment)
class commentAdmin(admin.ModelAdmin):
    pass






