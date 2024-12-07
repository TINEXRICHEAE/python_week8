# python_week8
# Weather App

A Python-based web application for checking weather information, built with Django and integrated with OpenWeather API. This application allows users to get weather data based on either city name or geographical coordinates, displaying key information like temperature, humidity, wind speed, and weather condition.

## Features

- Users can input a city name or geographical coordinates to get weather details.
- Displays weather information including temperature, condition, humidity, and wind speed.
- Provides a simple and user-friendly interface.

## Technologies Used

- **Django**: Web framework for the backend.
- **OpenWeather API**: For fetching real-time weather data.
- **HTML/CSS/JavaScript**: For the frontend and styling.
- **Bootstrap**: For responsive design.
- **Python-dotenv**: For environment variable management.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/TINEXRICHEAE/python_week8.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd weather-app
    ```

3. **Create and activate the virtual environment** (optional but recommended):
    - On Windows:
      ```bash
      python -m venv venv
      .\venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```

4. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

5. **Set up environment variables**:
    - Create a `.env` file in the root of the project.
    - Add your OpenWeather API key and any other sensitive keys:
      ```
      API_KEY=your_openweather_api_key
      SECRET_KEY=your_django_secret_key
      ```

6. **Run migrations** (if applicable):
    ```bash
    python manage.py migrate
    ```

7. **Start the server**:
    ```bash
    python manage.py runserver
    ```

8. Visit `http://127.0.0.1:8000` in your browser to access the app.

## Usage

- When the app is running, open it in a browser.
- Enter a **city name** or **geographical coordinates** (latitude and longitude) into the input field.
- The app will display the weather information, including temperature, weather condition, humidity, and wind speed.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with improvements or bug fixes.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

