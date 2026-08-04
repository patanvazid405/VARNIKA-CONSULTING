# Varnika Consulting — Backend (Django)

REST API backend for the contact form: validates submissions, stores leads
in a database, emails a notification, and exposes a Django admin panel to
browse leads.

## Setup

```bash
cd backend
python -m venv venv
./venv/Scripts/activate        # Windows (PowerShell: .\venv\Scripts\Activate.ps1)
pip install -r requirements.txt
cp .env.example .env           # then fill in email credentials
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API runs at `http://127.0.0.1:8000/`. The admin panel is at
`http://127.0.0.1:8000/admin/`.

## Endpoint

`POST /api/contact/`

```json
{
  "name": "Jane Doe",
  "company": "Acme Shipping",
  "email": "jane@acme.com",
  "phone": "1234567890",
  "role": "NVOCC",
  "message": "We need help with EDI integration."
}
```

Valid `role` values: see `leads/models.py` → `Lead.ROLE_CHOICES` (mirrors the
options in the React contact form).

Returns `201` with the saved lead on success, `400` with field errors on
validation failure.

## Email

By default (`EMAIL_BACKEND` unset) emails print to the console — good for
local development. To actually send mail, set in `.env`:

```
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.your-provider.com
EMAIL_HOST_USER=...
EMAIL_HOST_PASSWORD=...
```

Any SMTP provider works (Gmail app password, SendGrid, Resend, etc.).

## Future: Zoho CRM sync

The client plans to connect Zoho CRM eventually. `leads/crm.py` has a
`push_to_zoho(lead)` stub already wired into `leads/views.py::create_lead` —
implement it against the Zoho CRM API when that's ready, and every new lead
will sync automatically (the `Lead.crm_synced` field tracks which ones have).
Nothing else needs to change.

## Deploying

This is a standard Django app — deploy it to Render, Railway, or any host
that runs Python. It needs its own domain/URL; the React frontend (deployed
separately on Vercel) calls it over HTTPS, so remember to:

1. Set `DJANGO_ALLOWED_HOSTS` to the backend's real domain.
2. Set `CORS_ALLOWED_ORIGINS` to the frontend's real domain (e.g. your Vercel
   URL).
3. Switch to a real database (Postgres) instead of SQLite for production —
   update `DATABASES` in `config/settings.py`.
4. Set `DJANGO_DEBUG=False`.
