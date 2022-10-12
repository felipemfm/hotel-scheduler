from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('hotel', views.HotelViewSet)
router.register('room', views.RoomViewSet)

urlpatterns = router.urls
