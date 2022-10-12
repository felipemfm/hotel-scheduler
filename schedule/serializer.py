from rest_framework import serializers
from schedule.models import Hotel, Reservation, Room


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'address']


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'hotel', 'room_number']


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['id', 'hotel', 'room', 'year', 'month', 'day']
