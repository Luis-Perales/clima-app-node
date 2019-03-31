const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

// argv.direccion
// lugar.getLugLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInformacion = async(direccion) => {

    try {
        const coords = await lugar.getLugLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }`;
    } catch (e) {
        return `No se puede determinar el clima de ${ direccion }`;
    }

}

getInformacion(argv.direccion)
    .then(console.log)
    .catch(console.log)