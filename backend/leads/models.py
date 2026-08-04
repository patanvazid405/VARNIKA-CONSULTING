from django.db import models


class Lead(models.Model):
    ROLE_CHOICES = [
        ("Shipping Line / Liner Operator", "Shipping Line / Liner Operator"),
        ("NVOCC", "NVOCC"),
        ("Freight Forwarder", "Freight Forwarder"),
        ("Shipping Agency", "Shipping Agency"),
        ("Port / Terminal Operator", "Port / Terminal Operator"),
        ("Container Depot", "Container Depot"),
        ("Logistics Provider / 3PL / 4PL", "Logistics Provider / 3PL / 4PL"),
        ("Customs Broker", "Customs Broker"),
        ("Other", "Other"),
    ]

    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    role = models.CharField(max_length=100, choices=ROLE_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} ({self.company}) - {self.created_at:%Y-%m-%d}"
