from django.contrib import admin

# Register your models here.

from .models import Motion, Category, Tournament

admin.site.register(Motion)
admin.site.register(Category)
admin.site.register(Tournament)