from django.db import models

class Local(models.Model):
    id = models.AutoField(primary_key = True)
    nombre = models.CharField(max_length=50)
    