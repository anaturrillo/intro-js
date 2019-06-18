// Escribir las tablas de multiplicar del 1 al 10.

for (var i = 1; i < 10; i++) {
	console.log('-------------- Tabla del ' + i + ' --------------')
	for (var j = 1; j < 10; j++) {
		var result = i + ' x ' + j + ' = ' + i*j;
		console.log(result)
	}
}