let weather = {
    apiKey: '0a24f6082df14108ca78847b83b32791',
    fetchWeatherC: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + 
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeatherC(data));
     
    },
    fetchWeatherF: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=" +
            this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeatherF(data));
        
    },
    displayWeatherC: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
       
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = 
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = 
            "Wind Speed: " + speed + " km/h" 
        document.querySelector('.weather').classList.remove('loading');
    },
    displayWeatherF: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = 
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = 
            "Wind Speed: " + speed + " m/h";
        document.querySelector('.weather').classList.remove('loading'); 
       
    },
    searchC: function() {
        this.fetchWeatherC(document.querySelector(".search-bar").value)
    },
    searchF: function() {
        this.fetchWeatherF(document.querySelector('.search-bar').value)
    } 
}

document.querySelector('.search button').addEventListener('click', function() {
    weather.searchC();
})

document.querySelector('.C').addEventListener('click', function() {
    weather.searchC();
})

document.querySelector('.F').addEventListener('click', function() {
    weather.searchF();
})

document.querySelector('.search-bar').addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        weather.searchF();
    }
});

weather.fetchWeatherF("New York")