from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('notes/', views.note_list),
    path('notes/<int:note_id>/', views.note_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns)