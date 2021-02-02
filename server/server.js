var express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

const Juego = require ('./juego');


var app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.post('/juegos', Juego.Juegos);
app.post('/juegosEnEspera', Juego.JuegosEnEspera);
app.post('/pistas', Juego.Pistas);
app.post('/crear', Juego.Crear);
app.post('/unirse', Juego.Unirse);


var server = app.listen(8888, function (req, res) {
    console.log('El servidor se esta ejecutando en el puerto 8888');
});