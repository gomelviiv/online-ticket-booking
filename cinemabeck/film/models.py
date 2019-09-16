from django.db import models


class Film (models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length = 50, default = '')
    origin_name =models.CharField(max_length = 50, default = '')
    year =  models.CharField(max_length = 4, default = '')
    coutry = models.CharField(max_length = 15, default = '')
    description = models.CharField(max_length = 600, default = '')
    image = models.ImageField(upload_to='images/', null=True, blank=True)
