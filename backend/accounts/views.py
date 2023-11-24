from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from .models import Note
from rest_framework.decorators import api_view, authentication_classes, permission_classes


@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['GET', 'POST'])
def note_list(request):
    if request.method == 'GET':
        user = request.user
        notes = Note.objects.filter(user=user)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':
        request.data['user'] = request.user.id
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@authentication_classes([])
@permission_classes([])
@api_view(['DELETE'])
def note_detail(request, note_id):
    try:
        Note.objects.get(pk=note_id, user=request.user)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    note = Note.objects.get(pk=note_id)
    note.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
