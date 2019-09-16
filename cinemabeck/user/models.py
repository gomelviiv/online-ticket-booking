from django.db import models

class User (models.Model):
    created = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length = 15, default = '', unique=True)
    password = models.CharField(max_length = 20, default = '')
