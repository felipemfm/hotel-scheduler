from rest_framework.viewsets import ModelViewSet
from .models import Hotel
from .serializer import HotelSerializer


class HotelViewSet(ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
