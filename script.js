// const apiKey = 'd3defb88d60c4ad2905141212242409'
// const apiUrl = 'https://api.weatherapi.com/v1/current.json?units=metric&q='
// const search = document.querySelector('.search-bar')
// const searchBtn = document.querySelector('.search-button')
// const weatherIcon = document.querySelector('.weather-icon')

// async function checkWeather(city) {
// 	const response = await fetch(apiUrl + city + `&key=${apiKey}`)
// 	console.log(data)
// 	document.querySelector('.city').innerHTML = data.location.name
// 	document.querySelector('.temp').innerHTML =
// 		Math.round(data.current.temp_c) + '°C'
// 	document.querySelector('.humidity').innerHTML = data.current.humidity + '%'
// 	document.querySelector('.wind').innerHTML = data.current.wind_kph + 'km/h'
// 	const iconUrl = 'https:' + data.current.condition.icon
// 	weatherIcon.src = iconUrl
// 	document.querySelector('.weather').style.display = 'block'
// }

// searchBtn.addEventListener('click', () => {
// 	checkWeather(search.value)
// })

// checkWeather()

const apiKey = 'd3defb88d60c4ad2905141212242409'
const apiUrl = 'https://api.weatherapi.com/v1/current.json?units=metric&q='
const search = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
	if (!city) {
		alert('Please enter a city name')
		return
	}

	try {
		const response = await fetch(apiUrl + city + `&key=${apiKey}`)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		console.log(data)
		document.querySelector('.city').innerHTML = data.location.name
		document.querySelector('.temp').innerHTML =
			Math.round(data.current.temp_c) + '°C'
		document.querySelector('.humidity').innerHTML = data.current.humidity + '%'
		document.querySelector('.wind').innerHTML = data.current.wind_kph + 'km/h'
		const iconUrl = 'https:' + data.current.condition.icon
		weatherIcon.src = iconUrl
		document.querySelector('.weather').style.display = 'block'
	} catch (error) {
		console.error('Fetch error: ', error)
		alert('Failed to fetch weather data. Please try again later.')
	}
}

searchBtn.addEventListener('click', () => {
	checkWeather(search.value)
})

// Начальное значение для проверки
checkWeather('London')
