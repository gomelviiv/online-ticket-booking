from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from blockPlaces import views

urlpatterns = [
    path('', views.BlockPlacesList.as_view()),
    path('create/', views.BlockPlacesCreate.as_view()),
    path('<int:pk>/', views.BlockPlacesDetail.as_view()),
    path('<int:pk>/update', views.BlockPlacesUpdate.as_view()),
    path('<int:pk>/delete', views.BlockPlacesDeleteView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
