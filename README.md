# Weather App

A Django-based weather application that provides real-time weather information using the OpenWeather API. Users can search for weather data using either city names or geographical coordinates.

## Features

- Real-time weather data retrieval
- Support for both city name and coordinates search
- Display of key weather metrics:
  - Temperature in Celsius
  - Weather conditions
  - Humidity percentage
  - Wind speed
  - Location coordinates
- Clean and responsive user interface

## Technologies Used

- **Django**: Web framework for the backend
- **OpenWeather API**: For fetching real-time weather data
- **HTML/CSS/JavaScript**: For the frontend and styling
- **Bootstrap**: For responsive design
- **Python-dotenv**: For environment variable management

## Prerequisites

- Python 3.x
- Django 4.2.x
- OpenWeather API key

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/TINEXRICHEAE/python_week8.git
```

2. **Navigate to the project directory**:
```bash
cd weatherApp
```

3. **Create and activate the virtual environment**:
```bash
python -m venv weza
.\weza\Scripts\activate
```

4. **Install dependencies**:
```bash
# Upgrade pip
python -m pip install --upgrade pip

# Install requirements
pip install -r requirements.txt

# Alternatively: Use --trusted-host as a workaround virtual environment associated errors
pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org
```

5. **Set up environment variables**:
   - Create a `.env` file in the project root
   - Add your OpenWeather API key and Django secret key:
   ```plaintext
   API_KEY=your_openweather_api_key
   SECRET_KEY=your_django_secret_key
   ```

6. **Run migrations**:
```bash
python manage.py migrate
```

7. **Start the development server**:
```bash
python manage.py runserver
```

8. Visit `http://127.0.0.1:8000` in your browser to access the app.

## Usage

1. When the app is running, open it in a browser
2. Enter either:
   - A city name (e.g., "Kampala", "Soroti")
   - Geographical coordinates (latitude,longitude)
3. Click the search button
4. View the displayed weather information:
   - Current temperature
   - Weather condition
   - Humidity level
   - Wind speed
   - Location coordinates

## Project Structure

```plaintext
weatherApp/
├── weather/              # Main application
│   ├── views.py         # Core logic and API handling
│   └── urls.py          # URL routing
├── static/              # Static files
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── templates/          # HTML templates
└── weatherApp/         # Project settings
```

## Security Notes

- API keys are stored securely in environment variables
- `.env` file is included in `.gitignore`
- SSL verification is disabled for development (enable for production)
- Debug mode should be disabled in production

## Error Handling

The application handles various error scenarios:
- Invalid city names or coordinates
- Missing API keys
- Network connectivity issues
- Invalid response formats
- Server-side errors

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new pull request

## License

This project is open-source and available under the MIT License.
```
