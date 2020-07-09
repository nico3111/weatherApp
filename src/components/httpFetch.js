function fetchWeather(city) {

    return fetch('http://api.weatherstack.com/?access_key=YOUR_ACCESS_KEYd1a3c8ff4c577a629c1ebcae0358d2ea&query=' + city)
        .then(response => response.json())
}
exports = { fetchWeather }