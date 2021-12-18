from rest_framework import serializers
from Mesa.models import Mesa

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = ['id', 'numero','local']