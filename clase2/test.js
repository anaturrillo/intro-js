var edad = prompt ("Cual es su edad?");
edad = parseInt(edad);

console.log(edad)
if (edad > 20) {  
    console.log("Usted es mayor a 20")
} else if (edad > 15 && edad < 20) {
console.log("Usted tiene entre 20 y 15")
} else if (edad === 20){
    console.log("Usted tiene 20 años")
}else {
    console.log("Usted es demaciado  chico")
}