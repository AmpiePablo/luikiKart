
var juegos = [];

var identity = 0;


/*
 * Nombre:
 * 		Juegos
 *
 * Salidas:
 *		Arreglo de objetos
 *
 * Objetivo:
 * 		Devolver todos los juegos
 *		que tenga actualmente el servidor
 */
exports.Juegos = function (req, resp) {
	
	resp.json( juegos );
};


/*
 * Nombre:
 * 		JuegosEnEspera
 *
 * Salidas:
 *		Arreglo de objetos
 *
 * Objetivo:
 * 		Devolver todos los juegos
 *		que tenga actualmente el servidor
 *		que estén en espera
 */
exports.JuegosEnEspera = function (req, resp) {
	
	var juegosEnEspera = [];
	
	for (juego of juegos) {
		
		if (juego.jugadores.length < juego.maxJugadores) {
			
			juegosEnEspera.push(juego);
		}
	}
	
	resp.json( juegosEnEspera );
};


/*
 * Nombre:
 * 		Pistas
 *
 * Salidas:
 *		Arreglo de strings
 *
 * Objetivo:
 * 		Devolver todos los nombres
 *		de las pistas
 */
exports.Pistas = function (req, resp) {
	
	resp.json( ["Rainbow Road", "Waluigi Pinball", "Dino Dino Jungle", "Mute City"] );
};


/*
 * Nombre:
 * 		Crear
 *
 * Entradas:
 *		cantVueltas: un entero,
 *		maxJugadores: un entero,
 *		jugadorActual: un string,
 *		vehiculo: un string,
 *		pistaElegida: un string,
 *		modo: un string
 *
 * Salidas:
 *		Un entero
 *
 * Restricciones:
 *		cantVueltas debe ser entero positivo
 *		maxJugadores debe ser entero positivo menor o igual a 5,
 *		pistaElegida debe coincidir con una de las pistas establecidas
 *
 * Objetivo:
 * 		Crear un nuevo juego y agregarlo a la lista
 *		de juegos del servidor
 */
exports.Crear = function (req, resp) {
	console.log(req.body);
	
	identity++;
	req.body.idPartida = identity;
	
	req.body.jugadores = [
		{
			jugador: req.body.jugadorActual,
			vehiculo: req.body.vehiculo
		}
	];
	
	delete req.body.jugadorActual;
	delete req.body.vehiculo;
	
	juegos.push(req.body);
	
	resp.json( {id_juego : identity} );
};


/*
 * Nombre:
 * 		Unirse
 *
 * Entradas:
 *		idPartida: un entero,
 *		jugador: un string,
 *		vehiculo: un string
 *
 * Salidas:
 *		Un 0 o un 1
 *
 * Objetivo:
 * 		Agregar un jugador a un juego
 *		que tenga actualmente el servidor
 *		en espera
 */
exports.Unirse = function (req, resp) {
	console.log(req.body);
	
	for (juego of juegos) {
		
		if (juego.idPartida == req.body.idPartida) {
			
			if (juego.jugadores.length < juego.maxJugadores) {
				
				for (jugador of juego.jugadores) {
					if (jugador.jugador == req.body.jugador || jugador.vehiculo == req.body.vehiculo) {
						
						resp.json( {exito: 0} );
						return;
					}
				}
			
				delete req.body.idPartida;
				
				juego.jugadores.push(req.body);
				
				resp.json( {exito : 1} );
				return;
				
			} else {
				
				resp.json( {exito: 0} );
				return;
			}
		}
	}
	
	resp.json( {exito: 0} );
};