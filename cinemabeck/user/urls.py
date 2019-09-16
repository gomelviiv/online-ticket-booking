from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user import views
# from user.serializers import create

urlpatterns = [
    path('', views.UserList.as_view()),
    path('create/', views.UserCreate.as_view()),
    path('<int:pk>/', views.UserDetail.as_view()),
    path('<int:pk>/update', views.UserUpdate.as_view()),
    path('<int:pk>/delete', views.UserDeleteView.as_view()),
    # path('temp/', create),
]

urlpatterns = format_suffix_patterns(urlpatterns)
