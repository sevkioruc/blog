from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.serializers import CharField, EmailField

User = get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'password'
        ]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validatedData):
        username = validatedData['username']
        email = validatedData['email']
        password = validatedData['password']
        userObj = User(
                username = username,
                email = email
            )
        userObj.set_password(password)
        userObj.save()

        return validatedData
