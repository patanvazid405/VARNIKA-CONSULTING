"""
Zoho CRM integration point (not yet implemented).

The client has said Zoho CRM is a likely future connection. When that's
ready, implement push_to_zoho() below to create/update a Lead record in
Zoho CRM via their REST API (https://www.zoho.com/crm/developer/docs/api/v8/),
using an OAuth access token stored in settings/.env (ZOHO_CLIENT_ID,
ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN).

Call push_to_zoho(lead) from leads/views.py::create_lead once implemented,
the same way send_mail() is called today — wrap it in try/except so a CRM
outage never blocks saving the lead or the site's success message.
"""

from .models import Lead


def push_to_zoho(lead: Lead) -> bool:
    """Placeholder — returns False (not synced) until implemented."""
    return False
