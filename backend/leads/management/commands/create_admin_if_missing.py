import os

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """Creates a superuser from env vars if one doesn't already exist.

    Safe to run on every deploy (Render has no interactive shell on the
    free tier, so createsuperuser's normal prompt flow isn't usable there).
    Set DJANGO_SUPERUSER_USERNAME / _EMAIL / _PASSWORD in the environment.
    """

    help = "Create a superuser from DJANGO_SUPERUSER_* env vars if none exists yet."

    def handle(self, *args, **options):
        User = get_user_model()
        username = os.environ.get("DJANGO_SUPERUSER_USERNAME")
        email = os.environ.get("DJANGO_SUPERUSER_EMAIL", "")
        password = os.environ.get("DJANGO_SUPERUSER_PASSWORD")

        if not username or not password:
            self.stdout.write("DJANGO_SUPERUSER_USERNAME/PASSWORD not set — skipping.")
            return

        if User.objects.filter(username=username).exists():
            self.stdout.write(f"Superuser '{username}' already exists — skipping.")
            return

        User.objects.create_superuser(username=username, email=email, password=password)
        self.stdout.write(self.style.SUCCESS(f"Created superuser '{username}'."))
