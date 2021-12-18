from rest_framework.viewsets import ModelViewSet

from Mesa.models import Mesa
from Mesa.api.serializers import MesaSerializer

class MesaViewSet(ModelViewSet):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer