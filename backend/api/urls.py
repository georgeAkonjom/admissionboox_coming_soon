from django.urls import path

from .views import MailingListView, SchoolListView, health_check

urlpatterns = [
    path("subscribe/", MailingListView.as_view(), name="email-subscribe"),
    path("onboarding/", SchoolListView.as_view(), name="school_onboarding"),
    path("health/", health_check),
]
