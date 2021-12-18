from django.urls import path
from Producto.api.views import ProductoView


urlpatterns = [
    path('producto/', ProductoView.as_view()),
]