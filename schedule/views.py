from rest_framework.viewsets import ModelViewSet
from .models import Hotel, Room
from .serializer import HotelSerializer, RoomSerializer


class HotelViewSet(ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer


class RoomViewSet(ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
