from django.conf.urls import include
from django.urls import path
from .views import all_products


urlpatterns = [
    path('products', all_products, name='products'),
]
