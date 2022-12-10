"""
Serializer for recipe APIs.
"""
from rest_framework import serializers
from schedule.models import Hotel, Reservation, Room


class HotelSerializer(serializers.ModelSerializer):
    """Serializer for Hotel"""
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'address']


class RoomSerializer(serializers.ModelSerializer):
    """Serializer for Hotel Room"""
    class Meta:
        model = Room
        fields = ['id', 'hotel', 'room_number']


class ReservationSerializer(serializers.ModelSerializer):
    """Serializer for Hotel Room Reservation"""
    class Meta:
        model = Reservation
        fields = ['id', 'hotel', 'user', 'room', 'year', 'month', 'day']
