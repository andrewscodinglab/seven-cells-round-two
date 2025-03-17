from rest_framework import serializers
from .models import WellnessProduct

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = WellnessProduct
        fields = '__all__'