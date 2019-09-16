from django.db import models

class Money (models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.CharField(max_length = 15, default = '')
    cash = models.CharField(max_length = 20, default = '')
