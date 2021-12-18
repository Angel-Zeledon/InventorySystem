from django.db import models
from Local.models import Local

class Mesa(models.Model):
    id = models.AutoField(primary_key = True)
    numero = models.IntegerField()
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    