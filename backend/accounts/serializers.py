from djoser.serializers import UserCreateSerializer, serializers
from django.contrib.auth import get_user_model
from .models import Note

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
      class Meta(UserCreateSerializer):
            model = User
            fields = ('id', 'email', 'name', 'password')

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'