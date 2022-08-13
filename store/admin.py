from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
