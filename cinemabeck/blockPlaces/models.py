from django.db import models

class BlockPlaces(models.Model):
    origin_name =models.CharField(max_length = 50, default = '')
    sector = models.CharField(max_length = 15, default = '')
    row = models.CharField(max_length = 15, default = '')
    place = models.CharField(max_length = 15, default = '')
    user = models.CharField(max_length = 50, default = '')
    status = models.CharField(max_length = 20, default = '')
