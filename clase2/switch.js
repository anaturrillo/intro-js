console.log('switch')
var hoy = new Date(1995,11,15);

var dia = hoy.getDay();
console.log(dia)

switch(dia) {
	case 1:
		console.log('Que bueno que tengo curso de js');
		break;
	case 2:
		console.log('recien es martes')
		break;
	case 3:
	case 4:
		console.log('ya se termina la semana')
		break
	case 5:
		console.log('Ya es viernes!!');
		break
	case 6:
	case 0:
		console.log('es fin de semana')
		break
	default:
		console.log('eso no es un dia')

}		