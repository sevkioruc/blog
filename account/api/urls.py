from django.urls import path, include
from .views import UserCreateAPIView, UserLoginAPIView

urlpatterns = [
    path('register', UserCreateAPIView.as_view(), name='register'),
]
