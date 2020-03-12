from django.urls import path, include
from .views import UserCreateAPIView

urlpatterns = [
    path('register', UserCreateAPIView.as_view(), name='register'),
]
