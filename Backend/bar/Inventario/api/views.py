from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from Inventario.api.serializers import InventarioSerializer
from Inventario.models import Inventario

class InventarioView(APIView):
    def get(self, request, format=None):
        inventario = Inventario.objects.all()
        serializer = InventarioSerializer(inventario, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = InventarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk, format = None):
        post = self.get_object(pk)
        serializer = PostSerializers(post, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format = None):
        post = self.get_object(pk)
        post.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)  