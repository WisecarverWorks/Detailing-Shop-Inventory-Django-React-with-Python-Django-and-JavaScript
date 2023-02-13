from django.db import models

# Create your models here.

class Inventory(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()
    image = models.ImageField(upload_to='inventory_images/')

    def __str__(self):
        return self.name
