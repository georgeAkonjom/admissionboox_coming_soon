from rest_framework import fields, serializers

from .models import MailingList, SchoolInfo


class MailingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MailingList
        fields = "__all__"


class SchoolListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolInfo
        fields = "__all__"
