var rolIngresado = prompt('Ingrese su rol') || ''; // modo shorthand del condicional. Le asigna a la variable el resultado del prompt o un string vacío
var rol = rolIngresado.toLowerCase()

var mensaje = '';

var contenedorMensaje = document.getElementById('contenedorMensaje');

if (rol === 'admin' || rol === 'recursos') {
	var clave = prompt('Ingrese su clave');

	if (clave === '123') {
		var nombreDeUsuario = prompt('Ingrese su nombre de usuario') || '';

		mensaje = 'Hola, ' + capitalizar(nombreDeUsuario) + '! Bienvenide a nuestro sitio';
		
	} else {
		mensaje = 'Hubo un error en el proceso. Consulte su contraseña con su supervisor';
	}
} else {
	mensaje = 'Hubo un error en el proceso. Consulte su rol con su supervisor';
}

contenedorMensaje.innerHTML = mensaje;

// HERRAMIENTAS

function capitalizar(palabra) {
	var primeraLetra = palabra[0];
	var restoDeLaPalabra = palabra.slice(1);
	return primeraLetra.toUpperCase() + restoDeLaPalabra
}