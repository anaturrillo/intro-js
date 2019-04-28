console.log('condicionales');

// si es mayor a 20 "Usted es mayor de 20 años"

// si tiene entre 20 y 15 "Usted tiene entre 20 y 15 años"

// si no usted es demasiado chico

var edad = prompt('Cual es su edad');


if ( edad > 20) {
	console.log('Usted tiene  mas de 20')

	var nombre = prompt('Cual es su nombre');
	if (nombre === 'Ana') {
		console.log('Su numbre muy bonito')
	} else {
		console.log('Su nombre esta bien tambien')
	}

} else if ( edad == 20) {
	console.log('Usted tiene 20 años')
} else if (edad > 15 && edad < 20) {
	console.log('Usted tiene entre 15 y 20 años')
} else {
	console.log('Usted es muy joven')
}