from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from money import views

urlpatterns = [
    path('', views.MoneyList.as_view()),
    path('create/', views.MoneyCreate.as_view()),
    path('<int:pk>/', views.MoneyDetail.as_view()),
    path('<int:pk>/update', views.MoneyUpdate.as_view()),
    path('<int:pk>/delete', views.MoneyDeleteView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
