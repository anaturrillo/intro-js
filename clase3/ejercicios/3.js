// Loguear por consola los números del 100 al 1 indicando si el número es múltiplo de 5 o no.

for (var k = 100; k > 0; k--) {
	if (k % 5 === 0) {
		console.log(k + ' es multiplo de 5')
	} else {
		console.log(k + ' NO es multiplo de 5')
	}
}