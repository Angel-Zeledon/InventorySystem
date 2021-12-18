from django.db import models

class Historial(models.Model):
    id = models.AutoField(primary_key = True)
    fecha = models.DateTimeField(auto_now_add=True)
    nombre = models.CharField(max_length=50)
    cantidad = models.IntegerField()
    