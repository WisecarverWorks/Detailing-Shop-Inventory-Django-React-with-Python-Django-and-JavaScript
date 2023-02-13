from rest_framework import serializers
from .models import Inventory

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = [all]
        depth = 1
