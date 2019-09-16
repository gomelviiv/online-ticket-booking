from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from rest_framework import generics

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'created', 'email', 'password')


@api_view(['post'])
def create(request):
    user = User.objects.filter(email = request.data['email'])
    if user is None:
        is_creacted = True
    else:
        is_creacted = False
    return Response({'is_creacted': is_creacted})
