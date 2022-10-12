from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('hotels', views.HotelViewSet)

hotels_router = routers.NestedSimpleRouter(router, 'hotels', lookup='hotel')
hotels_router.register('rooms', views.RoomViewSet)

urlpatterns = router.urls + hotels_router.urls
