var rol = prompt('Cual es su rol?')
var clave = '1234';
var contenedor = document.getElementById('mensajes');

if (rol === 'admin' || rol === 'recursos') {
	
	var claveUsuario = prompt('Ingrese su clave')
	
	if (claveUsuario === clave) {
		var nombreUsuario = prompt('Ingrese su nombre de usuario')
		contenedor.innerHTML = 'Hola, ' + nombreUsuario + '! Buen dia!'
	} else {
		contenedor.innerHTML = 'La clave es incorrecta'
	}


} else {
	contenedor.innerHTML = 'Hubo un error consulte su rol'
}