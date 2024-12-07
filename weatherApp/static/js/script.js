document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const weatherDisplay = document.getElementById("weatherDisplay");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchWeather(query);
        } else {
            weatherDisplay.innerHTML = `<p class="error">Please enter a valid location.</p>`;
        }
    });

    async function fetchWeather(query) {
        // Determine if the query is latitude and longitude or a city name
        const isLatLon = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(query);
        const apiUrl = isLatLon
            ? `/fetch-weather/?query=${encodeURIComponent(query.replace(/\s+/g, ""))}` // Remove spaces in lat, lon
            : `/fetch-weather/?query=${encodeURIComponent(query)}`; // Assume it's a city name
    
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Weather data not found.");
            const weatherData = await response.json();
    
            if (weatherData.error) throw new Error(weatherData.error);
    
            // Display weather information
            const { name, main, weather, wind, coord } = weatherData;
    
            // Determine the display name or coordinates
            let locationDisplay;
            let coordinatesDisplay;
    
            if (name) {
                // If city name is available, display it and show the coordinates in the coordinates section
                locationDisplay = `Weather in ${name}`;
                coordinatesDisplay = `Coordinates: (${coord.lat}, ${coord.lon})`;
            } else {
                // If only lat/lon is available, display the coordinates and show the name if available
                locationDisplay = `Weather at (${coord.lat}, ${coord.lon})`;
                coordinatesDisplay = `Location: ${name || "Not available"}`;
            }
    
            weatherDisplay.innerHTML = `
                <h2>${locationDisplay}</h2>
                <p><strong>Temperature:</strong> ${main.temp}°C</p>
                <p><strong>Condition:</strong> ${weather[0].description}</p>
                <p><strong>Humidity:</strong> ${main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
                <p><strong>${coordinatesDisplay}</strong></p>
            `;
        } catch (error) {
            weatherDisplay.innerHTML = `<p class="error">${error.message}</p>`;
        }
    }    
});
