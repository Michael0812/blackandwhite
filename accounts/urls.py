from django.urls import path
from accounts.views import logout, login, registration


urlpatterns = [
    path('logout/', logout, name="logout"),
    path('login/', login, name="login"),
    path('registration/', registration, name="registration"),
]
