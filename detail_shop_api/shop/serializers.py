from rest_framework import serializers
from .models import Inventory

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        #fields = ('id', 'title', 'description', 'price', 'quantity', 'image') 
        fields = '__all__'