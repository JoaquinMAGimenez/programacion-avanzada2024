// 1. Agregar y Eliminar Elementos:
// Crea un array frutas con los valores ["manzana", "banana", "pera"]. 
//Usa push para agregar una fruta al final, y pop para eliminar la última fruta.

let frutas = ["manzana", "banana", "pera"];
frutas.push("naranja");  // Agregando una fruta al final
console.log(frutas);  // ["manzana", "banana", "pera", "naranja"]
frutas.pop();  // Eliminando la última fruta
console.log(frutas);  // ["manzana", "banana", "pera"]

// 2. Array Bidimensional:
// Crea un array bidimensional llamado matriz con los valores [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. 
//Accede al elemento 5 e imprímelo en la consola.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[1][1]);  // 5

// 3. Iterar sobre un Array:
// Usa un bucle for para iterar sobre el array frutas e imprimir cada elemento.

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


// 4. Uso de map:
// Crea una función llamada elevarAlCuadrado que tome un array de números y 
//devuelva un nuevo array con cada número elevado al cuadrado. Usa map para implementar la función.

function elevarAlCuadrado(numeros) {
    return numeros.map(num => num * num);
}

console.log(elevarAlCuadrado([1, 2, 3, 4]));  // [1, 4, 9, 16]

// 6. Uso de reduce:
// Crea una función llamada sumarElementos que tome un array de números y 
//devuelva la suma de todos los elementos del array usando reduce.

function sumarElementos(numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

console.log(sumarElementos([1, 2, 3, 4]));  // 10

// 7. Uso de some:
// Crea un array de números llamado numeros y usa some para verificar si algún número es mayor que 10.

let numeros = [2, 5, 8, 12];
let algunMayorQueDiez = numeros.some(num => num > 10);
console.log(algunMayorQueDiez);  // true

// 8. Uso de every:
// Crea un array de números llamado numeros y usa every para verificar si todos los números son positivos.

let todosPositivos = numeros.every(num => num > 0);
console.log(todosPositivos);  // true

// 9. Uso de find:
// Crea un array de objetos llamados personas donde cada objeto tenga nombre y edad. 
//Usa find para encontrar a la primera persona mayor de 30 años.

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 35 },
    { nombre: "Luis", edad: 28 }
];

const personaMayorDe30 = personas.find(persona => persona.edad > 30);
console.log(personaMayorDe30);  // { nombre: "Juan", edad: 35 }

// 10. Uso de sort:
// Crea un array de palabras y ordénalo alfabéticamente usando sort.

const palabras = ["manzana", "pera", "banana", "naranja"];
const palabrasOrdenadas = palabras.sort();

console.log(palabrasOrdenadas);  // ["banana", "manzana", "naranja", "pera"]