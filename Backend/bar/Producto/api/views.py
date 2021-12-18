from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from Inventario.api.serializers import InventarioSerializer
from Inventario.models import Inventario

from Producto.api.serializers import ProductoSerializer
from Producto.models import Producto

class ProductoView(APIView):
    
    def ObtenerInventario(self, nombre):
        try:
            return Inventario.objects.get(nombre = nombre)
        except Inventario.DoesNotExist:
            raise Http404
    
    def get(self, request, format=None):
        producto = Producto.objects.all()
        serializer = ProductoSerializer(producto, many =True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductoSerializer(data = request.data)
        
        inventario = self.ObtenerInventario(request.data['nombre'])
        datos = {'nombre' : inventario.nombre, 'cantidad' : inventario.cantidad - 1}
        serializer_inventario = InventarioSerializer(inventario, data = datos)
        
        if serializer.is_valid():
            serializer.save()
            if serializer_inventario.is_valid():
                serializer_inventario.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer_inventario.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format = None):
        producto = self.get_object(pk)
        serializer = ProductoSerializer(producto, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format = None):
        producto = self.get_object(pk)
        producto.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

    def get_object(self, pk):
        try:
            return Producto.objects.get(pk = pk)
        except Producto.DoesNotExist:
            raise Http404