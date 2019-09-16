from rest_framework import generics
from .models import Money
from .serializers import MoneySerializer

class MoneyList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MoneyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MoneyCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MoneyUpdate(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MoneyDeleteView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
