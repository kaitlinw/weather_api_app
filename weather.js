const axios = require('axios')

async function getWeather(locationName, coordinates) {
    const res = await axios.get(`https://api.darksky.net/forecast/14c57eb21851a09eb3bb82b1bb240025/${coordinates[0]},${coordinates[1]}`)
    let celcius = ((res.data.currently.temperature - 32) * 5 / 9)
    console.log(locationName + " is currently " + celcius.toFixed(2) + " °C")
}


async function getLocation(inputName) {
    name = inputName.replace(' ', '%20')
    const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${inputName.concat('%20')}&language=en&key=6b6c3189b10241e69f1ab545fef5da61&language=en&pretty=1`)
    var resp = res.data.results[0]
    var locationName = resp.formatted
    var coordinates = [resp.geometry.lat, resp.geometry.lng]
    getWeather(locationName, coordinates)
}

getLocation(process.argv[2] || "Melbourne")







