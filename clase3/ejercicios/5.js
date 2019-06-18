// Modificar el programa anterior para que no imprima el 7 ni el 92.

for (var i = 1; i <= 100; i++) {
	if (i === 7 || i === 92) {
		continue
	}

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