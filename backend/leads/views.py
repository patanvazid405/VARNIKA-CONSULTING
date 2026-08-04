import logging

from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .crm import push_to_zoho
from .models import Lead
from .serializers import LeadSerializer

logger = logging.getLogger(__name__)


@api_view(["POST"])
def create_lead(request):
    serializer = LeadSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    lead = serializer.save()

    try:
        send_mail(
            subject=f"New consultation request from {lead.name} ({lead.company})",
            message=(
                f"Name: {lead.name}\n"
                f"Company: {lead.company}\n"
                f"Email: {lead.email}\n"
                f"Phone: {lead.phone or '-'}\n"
                f"Role: {lead.role}\n\n"
                f"Message:\n{lead.message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.LEAD_NOTIFICATION_EMAIL],
            fail_silently=False,
        )
        lead.email_sent = True
        lead.save(update_fields=["email_sent"])
    except Exception:
        logger.exception("Failed to send lead notification email for lead id=%s", lead.id)

    try:
        if push_to_zoho(lead):
            lead.crm_synced = True
            lead.save(update_fields=["crm_synced"])
    except Exception:
        logger.exception("Failed to sync lead id=%s to Zoho CRM", lead.id)

    return Response(LeadSerializer(lead).data, status=status.HTTP_201_CREATED)
