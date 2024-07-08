let weather = {
    apiKey: "e75e114e4f898a5817c9bd1a398261b7",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = 'Weather in ' + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText ="Wind Speed: " + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener('click', function() {
        weather.search();
    });

    document.querySelector(".search-bar").addEventListener("keyup", function (event) { 
        if (event.key == "Enter") {
            weather.search();
        }
    })

weather.fetchWeather('Greater Noida')