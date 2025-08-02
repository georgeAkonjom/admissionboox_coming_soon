from django.db import models
from django.forms import IntegerField


# Create your models here.
class MailingList(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)


class SchoolInfo(models.Model):
    school_email = models.EmailField(unique=True)
    school_name = models.TextField(max_length=200)
    school_description = models.TextField(max_length=6000)
    facilities_and_clubs = models.TextField(max_length=4000)
    school_admin_name = models.TextField(max_length=200)
    school_admin_email = models.EmailField(unique=True)
    school_address = models.TextField(max_length=600)
    curriculum_type = models.TextField(max_length=60)
    website_link = models.TextField(max_length=100)
    date_est = models.DateField(blank=True)
