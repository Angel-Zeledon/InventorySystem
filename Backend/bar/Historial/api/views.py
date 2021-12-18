from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from Inventario.api.serializers import InventarioSerializer
from Inventario.models import Inventario

from Historial.api.serializers import HistorialSerializer
from Historial.models import Historial

class HistorialView(APIView):
    
    def get_object(self, nombre):
        try:
            return Inventario.objects.get(nombre = nombre)
        except Inventario.DoesNotExist:
            raise Http404
    
    def get(self, request, format = None):
        historial = Historial.objects.all()
        serializer = HistorialSerializer(historial, many =True)
        print(serializer.data)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = HistorialSerializer(data = request.data)
        
        inventario = self.get_object(request.data['nombre'])
        datos = {'nombre' : inventario.nombre, 'cantidad' : inventario.cantidad + request.data['cantidad']}
        serializer_inventario = InventarioSerializer(inventario, data = datos)
        
        if serializer.is_valid():
            serializer.save()
            if serializer_inventario.is_valid():
                serializer_inventario.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)