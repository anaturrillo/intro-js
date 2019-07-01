
# EJERCICIOS FUNCIONES

- Crear una función que reciba dos numeros y devuelva la suma
- Crear una función que reciba un string y lo devuelva en mayúsculas (validar que el string es un número, si no lo es devolver un mensaje de error).
- Crear una función que reciba un string y devuelva la palabra más larga del string.
- Crear una función que reciba un array de nombres de frutas y devuelva un objeto que tenga como propiedad la posición del array y como valor el nombre de la fruta (el objeto va a tener tantas propiedades como elementos el array)

# EJERCICIOS DE SCOPE

```js
var name = 'Pedro Pomez';

console.log(name); 

function logName() {
    console.log(name);
}

logName();
```

```js
(function bla() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    console.log(a);
})()
```

```js
(function ble() {
    if(true) {
        var a = 5;
    }
    console.log(a);
})()
```

```js
var a = 5;

function first() {
    a = 6;
}

function second() {
    console.log(a);
}

first() 
second()
```

```js
function first() {
    a = 3;
}

function second() {
    console.log(a);
}

first() 
second()
```

```js
var a = 5;
(function bli() {
    var a = 7;
    console.log(a);
})()
```

```js
// closure / aplicación parcial

function greet() {
    name = 'Manola';
    return function () {
        console.log('Hola ' + name + '!');
    }
}

greetLetter = greet();

greetLetter();
```

```js
var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        console.log(a); 
    }
    again();
    console.log(a); 
}
test();
console.log(a);​  
```

```js
function getFunc() {
    var a = 7;
    return function(b) {
        console.log(a+b);
    }
}
var f = getFunc();
f(5);
```

```js
function test() {
   console.log('a: ', a);
   console.log('foo(): ', foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

```js
var fullname = 'Juan Topo';

var obj = {
   fullname: 'Juan Bautista Jr Xabadú',
   prop: {
      fullname: 'Cosme Fulanito',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log('obj.prop.getFullname(): ', obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log('test(): ', test());
```

```js
var a = 1; 

function b() { 
  a = 10;
} 


b(); 
console.log('a: ', a);
```

```js
var g = 'Soy una variable global!'

var outer = function() {
  var a = "Soy una variable local!"
  var inner = function() {
    console.log('a - ', a)
  }
  
  console.log('g - ', g)
  window.fnc = inner
}

outer();
fnc();
console.log('a', a)
```
