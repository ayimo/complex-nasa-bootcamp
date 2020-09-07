const btn = document.getElementById('button')

btn.addEventListener('click', ()=> {

function getWeather(facility, name, country, lat, long, count){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0f8d637a2552fece8a600d7f063c3a3d&units=imperial`)
        .then(response => response.json())
        .then(weatherData =>{
            let newLi = document.createElement('li')
            let info = document.createTextNode(`The tempurature at ${facility}, ${name}, ${country} is ${weatherData.main.temp} F, COUNT: ${count}`)
            newLi.appendChild(info)
            document.getElementById('facilities').appendChild(newLi)
            console.log(weatherData)
        })
};

fetch("https://data.nasa.gov/resource/gvk9-iz74.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((nasaLocation, i) => {
            getWeather(nasaLocation.facility, nasaLocation.center, nasaLocation.country, nasaLocation.location.latitude, nasaLocation.location.longitude, i);
        })
    })
})
