from rest_framework.routers import DefaultRouter
from Local.api.views import LocalViewSet

router_local = DefaultRouter()

router_local.register(prefix='local', basename='local', viewset=LocalViewSet)