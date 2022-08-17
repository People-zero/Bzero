from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Clean_Store)
class Clean_Store_Admin(admin.ModelAdmin):
    pass

@admin.register(Bottle_Collection_Store)
class Bottle_Collection_Store_Admin(admin.ModelAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
