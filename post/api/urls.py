from django.urls import path, include
from .views import PostListAPIView, PostDetailAPIView, PostDeleteAPIView, PostUpdatePIView, PostCreatePIView

urlpatterns = [
    path('list', PostListAPIView.as_view(), name='list'),
    path('detail/<pk>', PostDetailAPIView.as_view(), name='detail'),
    path('delete/<pk>', PostDeleteAPIView.as_view(), name='delete'),
    path('update/<pk>', PostUpdatePIView.as_view(), name='update'),
    path('create', PostCreatePIView.as_view(), name='create'),
]
