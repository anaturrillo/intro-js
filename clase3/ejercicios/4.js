/*
Escribir un programa que itere los enteros del 1 al 100. 
Pero para los múltiplos de 3 imprimir "Fizz", 
para los múltiplos de 5 imprimir "Buzz" 
y para los múltiplos de 3 y 5 imprimir "FizzBuzz"
*/

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i)
	}
}