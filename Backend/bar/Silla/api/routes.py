from rest_framework.routers import DefaultRouter
from Silla.api.views import SillaViewSet

router_silla = DefaultRouter()

router_silla.register(prefix='silla', basename='silla', viewset=SillaViewSet)