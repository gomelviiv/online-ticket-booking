from rest_framework import generics
from .models import Film
from .serializers import FilmSerializer


class FilmList(generics.ListAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

class FilmDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

class FilmCreate(generics.CreateAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


class FilmUpdate(generics.UpdateAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

class FilmDeleteView(generics.DestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
