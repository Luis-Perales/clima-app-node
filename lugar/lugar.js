//importamos el axios
const axios = require('axios');


const getLugLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'X-RapidAPI-Key': '75dbcb3933msh425c5b4a5524ff4p16f575jsn45e019ce24d8' }
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     });
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugLatLng
}