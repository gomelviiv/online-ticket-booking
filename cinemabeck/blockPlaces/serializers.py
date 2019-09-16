from rest_framework import serializers
from .models import BlockPlaces

class BlockPlacesSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlockPlaces
        fields = ('id', 'origin_name', 'sector',  'row', 'place', 'user', 'status',)
