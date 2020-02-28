from rest_framework import serializers
from post.models import PostModel
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostModel
        fields = [
            'title',
            'content',
            'publishingDate',
            'creator',
            'image'
        ]