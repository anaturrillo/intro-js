var usuarios = [
	{nombre: 'Juan', appellido:'Pedro', edad:40},
	{nombre: 'Ana', appellido:'Gracia', edad:25},
	{nombre: 'Maria', appellido:'Zarate', edad:34}
]

var rolIngresado = prompt('Ingrese su rol') || ''; // modo shorthand del condicional. Le asigna a la variable el resultado del prompt o un string vacío
var rol = rolIngresado.toLowerCase()

var mensaje = '';
var contenidoUsuarios = '';

var contenedorMensaje = document.getElementById('contenedorMensaje');
var tablaDeUsuarios = document.getElementById('tablaDeUsuarios');
var agregarUsuarioForm = document.getElementById('agregarUsuarioForm');

if (rol === 'admin' || rol === 'recursos') {
	var clave = prompt('Ingrese su clave');

	if (clave === '123') {
		var nombreDeUsuario = prompt('Ingrese su nombre de usuario') || '';

		mensaje = 'Hola, ' + capitalizar(nombreDeUsuario) + '! Bienvenide a nuestro sitio';
		console.log(usuarios)

		// Creamos la tabla de usuarios
		for (var i = 0; i < usuarios.length; i++) {
			
			contenidoUsuarios += '<tr>' + 
				'<td>' + usuarios[i].nombre + '</td>'+
				'<td>' + usuarios[i].appellido + '</td>'+
				'<td>' + usuarios[i].edad + '</td>'+
			'</tr>'
		}

		agregarUsuarioForm.style.display = 'block' // mostramos el formulario sólo a los usuarios registrados
		
	} else {
		mensaje = 'Hubo un error en el proceso. Consulte su contraseña con su supervisor';
	}
} else {
	mensaje = 'Hubo un error en el proceso. Consulte su rol con su supervisor';
}

contenedorMensaje.innerHTML = mensaje;
tablaDeUsuarios.innerHTML = contenidoUsuarios;

// EVENTOS

var boton = document.getElementById('agregarUsuario');

boton.onclick = function(event){
	event.preventDefault();
	console.log('agregarUsuario')

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var edad = document.getElementById('edad').value;
	var fila = '<tr>' + 
		'<td>' + nombre + '</td>'+
		'<td>' + apellido + '</td>'+
		'<td>' + edad + '</td>'+
	'</tr>';

	agregarUsuarioForm.reset();
	tablaDeUsuarios.innerHTML += fila
}


// HERRAMIENTAS

function capitalizar(palabra) {
	var primeraLetra = palabra[0];
	var restoDeLaPalabra = palabra.slice(1);
	return primeraLetra.toUpperCase() + restoDeLaPalabra
}