from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, CreateAPIView
from post.models import PostModel
from .serializers import PostSerializer

class PostListAPIView(ListAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer

class PostDetailAPIView(RetrieveAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

class PostDeleteAPIView(DestroyAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

class PostUpdateAPIView(UpdateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

class PostCreateAPIView(CreateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
