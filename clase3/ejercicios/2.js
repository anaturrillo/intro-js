// Modificar el ejercicio anterior para que se saltee los números que son múltiplos de 3

for ( var j = 0; j <= 100; j += 4) {
	if ( j % 3 === 0 && j !== 0) {
		continue
	} else {
		console.log(j)
	}
}