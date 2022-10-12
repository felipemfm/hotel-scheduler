from rest_framework.viewsets import ModelViewSet
from .models import Hotel, Reservation, Room
from .serializer import HotelSerializer, ReservationSerializer, RoomSerializer


class HotelViewSet(ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer


class RoomViewSet(ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class ReservationViewSet(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
