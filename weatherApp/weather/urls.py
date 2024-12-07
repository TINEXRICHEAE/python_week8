from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('fetch-weather/', views.fetch_weather, name='fetch_weather'),
]
