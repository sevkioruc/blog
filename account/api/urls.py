from django.urls import path, include
from .views import UserCreateAPIView, UserDetailAPIView

urlpatterns = [
    path('register', UserCreateAPIView.as_view(), name='register'),
    path('getUser/<username>', UserDetailAPIView.as_view(), name='getUser'),
]
