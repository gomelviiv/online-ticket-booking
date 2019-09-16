from rest_framework import serializers
from .models import Film

class FilmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Film
        fields = ('id', 'created',  'title', 'origin_name',
                  'year', 'coutry', 'description', 'image')
