from django.db import models

from Silla.models import Silla

class Producto(models.Model):
    id = models.AutoField(primary_key = True)
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    fecha = models.DateTimeField(auto_now_add=True)
    silla = models.ForeignKey(Silla, on_delete=models.CASCADE)

    