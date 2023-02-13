from django.urls import path, include
from inventory import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_inventory),
    path('all/', views.get_all_inventory),
]
