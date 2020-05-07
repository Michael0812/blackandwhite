from django.urls import path
from accounts.views import logout, login, registration, user_profile


urlpatterns = [
    path('logout/', logout, name="logout"),
    path('login/', login, name="login"),
    path('registration/', registration, name="registration"),
    path('profile/'. user_profile, name="profile")
]
