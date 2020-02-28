from rest_framework.generics import ListAPIView
from post.models import PostModel
from .serializers import PostSerializer

class PostListAPIView(ListAPIView):
    queryset = PostModel.objects.all()

    serializer_class = PostSerializer