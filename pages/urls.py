from django.urls import path
from .views import (
    delivery_view, 
    terms_view, 
    contact_view, 
    about_view, 
    shops_view
    )

urlpatterns = [
   path('delivery/', delivery_view, name="delivery"),
   path('terms/', terms_view, name="terms"),
   path('contact/', contact_view, name="contact"),
   path('about/', about_view, name="about"),
   path('shops/', shops_view, name="shops"),
]
