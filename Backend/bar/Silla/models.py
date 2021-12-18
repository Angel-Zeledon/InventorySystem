from django.db import models

from Mesa.models import Mesa

class Silla(models.Model):
    id = models.AutoField(primary_key = True)
    numero = models.IntegerField()
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    
class Mesa(models.Model):
    pass    
 
    