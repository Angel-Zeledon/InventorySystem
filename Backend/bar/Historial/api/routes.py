from django.urls import path
from Historial.api.views import HistorialView

urlpatterns = [
    path('historial/', HistorialView.as_view()),
]