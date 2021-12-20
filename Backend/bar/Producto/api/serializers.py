from rest_framework import serializers
from Producto.models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ['nombre', 'precio', 'silla','cantidad']