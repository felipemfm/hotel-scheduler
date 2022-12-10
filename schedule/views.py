"""
Views for the schedule API.
"""
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Hotel, Reservation, Room
from .serializer import HotelSerializer, ReservationSerializer, RoomSerializer


class HotelViewSet(ModelViewSet):
    """View for hotel API"""
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RoomViewSet(ModelViewSet):
    """View for hotel room API"""
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ReservationViewSet(ModelViewSet):
    """View for hotel room reservation API"""
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
