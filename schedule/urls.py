from cgitb import lookup
from email.mime import base
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('hotels', views.HotelViewSet)
# router.register('reservation', views.ReservationViewSet)

hotels_router = routers.NestedSimpleRouter(router, 'hotels', lookup='hotel')
hotels_router.register('rooms', views.RoomViewSet)
hotels_router.register('reservations', views.ReservationViewSet)

rooms_router = routers.NestedDefaultRouter(
    hotels_router, 'rooms', lookup='room')
rooms_router.register('reservations', views.ReservationViewSet)

urlpatterns = router.urls + hotels_router.urls + rooms_router.urls
