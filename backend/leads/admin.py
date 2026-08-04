from django.contrib import admin

from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("name", "company", "email", "phone", "role", "created_at", "email_sent")
    list_filter = ("role", "email_sent", "created_at")
    search_fields = ("name", "company", "email", "message")
    readonly_fields = ("created_at",)
