from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from film import views

urlpatterns = [
    path('', views.FilmList.as_view()),
    path('create/', views.FilmCreate.as_view()),
    path('<int:pk>/', views.FilmDetail.as_view()),
    path('<int:pk>/update', views.FilmUpdate.as_view()),
    path('<int:pk>/delete', views.FilmDeleteView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
