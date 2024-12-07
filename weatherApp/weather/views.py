from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import JsonResponse
import requests

import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Access the API_KEY from environment variables
API_KEY = os.getenv('API_KEY')

# Create your views here.
def home(request):
    return render(request, 'home.html', {'name': 'Our Very Own'})




def fetch_weather(request):
    query = request.GET.get('query')
    if not query:
        return JsonResponse({"error": "No location provided"}, status=400)
    
    
    # Determine if the query is latitude/longitude or city name
    if ',' in query:  # Assume latitude and longitude if the query contains a comma
        try:
            lat, lon = map(str.strip, query.split(','))
            api_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
        except ValueError:
            return JsonResponse({"error": "Invalid latitude/longitude format"}, status=400)
    else:  # Assume city name
        api_url = f"https://api.openweathermap.org/data/2.5/weather?q={query}&appid={API_KEY}&units=metric"

    try:
        response = requests.get(api_url)
        response.raise_for_status()
        weather_data = response.json()

        # Add lat/lon information to the response if available
        location_data = {
            "name": weather_data.get("name", "Unknown location"),
            "coord": weather_data.get("coord", {})
        }

        # Return the weather data along with location details
        weather_data.update(location_data)

        return JsonResponse(weather_data, status=200)
    
    except requests.exceptions.HTTPError as e:
        return JsonResponse({"error": str(e)}, status=response.status_code)
    except Exception as e:
        return JsonResponse({"error": "Failed to fetch weather data"}, status=500)
