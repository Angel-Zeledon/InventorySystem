from rest_framework.viewsets import ModelViewSet
from Silla.models import Silla
from Silla.api.serializers import SillaSerializer


class SillaViewSet(ModelViewSet):
    queryset = Silla.objects.all()
    serializer_class = SillaSerializer