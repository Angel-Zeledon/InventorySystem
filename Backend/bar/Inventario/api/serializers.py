from rest_framework import serializers
from Inventario.models import Inventario

class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario
        fields = ['fecha', 'nombre', 'cantidad']
        
