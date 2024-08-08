const inputData = document.querySelector('#weathers');
const searchBtn = document.querySelector('.search');
const weatherIcon = document.querySelector('.weather-icon');
let errorElment = document.querySelector('.error').style.display = 'block';


let apiKey = '8948b90c7c939335ba498f8656211523';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

searchBtn.addEventListener('click', fetchWeather);

// on click functinality
document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        searchBtn.click();
    }
});

async function fetchWeather() {
    try {
        let inputValue = inputData.value.trim();
        const response = await fetch(`${apiUrl} ${inputValue} &appid=${apiKey}`)
        if (!response.ok) {
            throw new Error('Network is not responding')
        }
        const data = await response.json()
        console.log(data)

        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
        // }

        if (data.weather[0].main === 'Cloud') {
            weatherIcon.src = 'images/cloud.png';
        } else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png';
        } else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        } else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png';
        }

        //empty input fields after submit
        inputData.value = '';

    } catch (error) {
        console.error(error)
    }

}






