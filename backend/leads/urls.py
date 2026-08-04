from django.urls import path

from .views import create_lead

urlpatterns = [
    path("contact/", create_lead, name="create-lead"),
]
