from django.urls import path
from .views import delivery, terms


urlpatterns = [
   path('delivery/', delivery, name="delivery"),
   path('terms/', terms, name="terms"),
]
