from rest_framework import serializers
from .models import Money

class MoneySerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'created', 'user', 'money')
