from django.urls import path
from Inventario.api.views import InventarioView


urlpatterns = [
    path('inventario/', InventarioView.as_view()),
]