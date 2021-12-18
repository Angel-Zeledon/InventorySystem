from rest_framework.viewsets import ModelViewSet

from Local.models import Local
from Local.api.serializers import LocalSerializer

class LocalViewSet(ModelViewSet):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    