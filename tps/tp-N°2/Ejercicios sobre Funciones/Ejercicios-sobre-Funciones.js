// 1. Función Suma:
// Crea una función llamada sumar que tome dos números como parámetros y devuelva su suma. 
//Prueba la función con diferentes números.

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3));  // 5
console.log(sumar(10, 20));  // 30
console.log(sumar(-5, 15));  // 10

// 2. Función que Multiplica:
// Crea una función llamada multiplicar que tome dos números como parámetros y devuelva su producto. 
//Prueba la función con diferentes valores.

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(2, 3));  // 6
console.log(multiplicar(4, 5));  // 20
console.log(multiplicar(-3, 7));  // -21

// 3. Función con Parámetro por Defecto:
// Crea una función llamada saludar que tome un parámetro nombre con un valor por defecto de "Invitado". 
//La función debe devolver "Hola, [nombre]".

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}

console.log(saludar());  // "Hola, Invitado"
console.log(saludar("Juan"));  // "Hola, Juan"

// 4. Función que Devuelve un Objeto:
// Crea una función llamada crearPersona que tome nombre y edad como parámetros y devuelva un objeto con esas propiedades.

function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

console.log(crearPersona("Ana", 25));  // {nombre: "Ana", edad: 25}

// 5. Función que Modifica un Objeto:
// Crea una función llamada actualizarEdad que tome un objeto persona y un número nuevaEdad, 
//y actualice la propiedad edad del objeto.

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

let persona = { nombre: "Luis", edad: 30 };
actualizarEdad(persona, 35);
console.log(persona);  // {nombre: "Luis", edad: 35}

// 6. Función Recursiva:
// Crea una función recursiva llamada factorial que calcule el factorial de un número dado.

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1

// 7. Función con Función Interna:
// Crea una función llamada despedir que contenga una función interna adios. 
//despedir debe devolver el resultado de llamar a adios.

function despedir() {
    function adios() {
        return "Adiós";
    }
    return adios();
}

console.log(despedir());  // "Adiós"

// 8. Función que Usa Otra Función:
// Crea una función llamada procesarArray que tome un array y una función como parámetros, y 
//aplique la función a cada elemento del array. Usa una función como parámetro para multiplicar cada número por 2.

function procesarArray(arr, fn) {
    return arr.map(fn);
}

function multiplicarPorDos(num) {
    return num * 2;
}

console.log(procesarArray([1, 2, 3], multiplicarPorDos));  // [2, 4, 6]

// 9. Función que Devuelve Otra Función:
// Crea una función llamada crearMultiplicador que tome un número X y 
//devuelva una nueva función que multiplique cualquier número por x.

function crearMultiplicador(x) {
    return function(y) {
        return y * x;
    };
}

const multiplicarPorTres = crearMultiplicador(3);
console.log(multiplicarPorTres(10));  // 30

// 10. Función Anónima:
// Crea una función anónima que sume dos números y la asigna a una variable llamada sumarAnonima. 
//Luego, invoca la función a través de esa variable.

const sumarAnonima = function(a, b) {
    return a + b;
};

console.log(sumarAnonima(7, 8));  // 15