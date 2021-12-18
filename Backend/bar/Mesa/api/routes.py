from rest_framework.routers import DefaultRouter
from Mesa.api.views import MesaViewSet

router_mesa = DefaultRouter()

router_mesa.register(prefix='mesa', basename='mesa', viewset=MesaViewSet)