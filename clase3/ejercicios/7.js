/*
Tengo conjuntos de 3 caracteres. 
Dado un largo mínimo para una password agregar de a uno los conjuntos de caracteres 
hasta llegar a la cantidad mínima
*/

var chars = ['aab', 'lsf', 'rwp', 'pfd', 'psf', 'msv', 'zaq', 'wsx', 'edc', 'rfv', 'tgb', 'yhn'];
var maxLength = chars.length * 3;

var passwordLength;

do {
	passwordLength = prompt('Qué largo desea que tenga la contraseña?');
} while ( passwordLength > maxLength)


var password = '';
var counter = 0;

while (password.length < passwordLength) {
	password += chars[counter];
	counter++
}

alert('Su password es: ' + password)

// crear un numero random entre dos numeros Math.floor(Math.random() * (max - min)) + min;