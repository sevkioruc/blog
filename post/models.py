from django.db import models
from django.contrib.auth.models import User

class PostModel(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    publishingDate = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
