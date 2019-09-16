from rest_framework import generics
from .models import BlockPlaces
from .serializers import BlockPlacesSerializer


class BlockPlacesList(generics.ListAPIView):
    queryset = BlockPlaces.objects.all()
    serializer_class = BlockPlacesSerializer

class BlockPlacesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlockPlaces.objects.all()
    serializer_class = BlockPlacesSerializer

class BlockPlacesCreate(generics.CreateAPIView):
    queryset = BlockPlaces.objects.all()
    serializer_class = BlockPlacesSerializer


class BlockPlacesUpdate(generics.UpdateAPIView):
    queryset = BlockPlaces.objects.all()
    serializer_class = BlockPlacesSerializer

class BlockPlacesDeleteView(generics.DestroyAPIView):
    queryset = BlockPlaces.objects.all()
    serializer_class = BlockPlacesSerializer
