from rest_framework import generics
from .models import WellnessProduct
from .serializers import ProductSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = WellnessProduct.objects.all()
    serializer_class = ProductSerializer