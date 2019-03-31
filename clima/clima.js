const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9c5b7996dae00721e8c8325836e0af64&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}