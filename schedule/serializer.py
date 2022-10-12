from dataclasses import field
from rest_framework import serializers
from schedule.models import Hotel


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        field = ['id', 'name', 'address']
