from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Inventory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    images = models.FileField(upload_to='inventory_images', blank=True)
    image_url = models.URLField(blank=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    owner = models.CharField(max_length=100, blank=True)
    file_url = models.URLField(blank=True)
    file = models.FileField(upload_to='inventory_files', blank=True)
    isDone: models.BooleanField(default=False)
    def __str__(self):
        return self.make
