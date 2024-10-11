const apiKey = 'd3defb88d60c4ad2905141212242409'
const apiUrl = 'https://api.weatherapi.com/v1/current.json?units=metric&q='
const search = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&key=${apiKey}`)
	console.log(data)
	document.querySelector('.city').innerHTML = data.location.name
	document.querySelector('.temp').innerHTML =
		Math.round(data.current.temp_c) + '°C'
	document.querySelector('.humidity').innerHTML = data.current.humidity + '%'
	document.querySelector('.wind').innerHTML = data.current.wind_kph + 'km/h'
	const iconUrl = 'https:' + data.current.condition.icon
	weatherIcon.src = iconUrl
	document.querySelector('.weather').style.display = 'block'
}

searchBtn.addEventListener('click', () => {
	checkWeather(search.value)
})

checkWeather()
