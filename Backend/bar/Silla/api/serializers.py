from rest_framework import serializers
from Silla.models import Silla


class SillaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Silla
        fields = ['id', 'numero', 'mesa']