// 1. Creación de un Objeto Básico:
// Crea un objeto llamado libro con propiedades como título, autor y añoDePublicacion. Imprime cada propiedad en la consola.

let libro = {
    título: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    añoDePublicacion: 1967
};

console.log(libro.título);
console.log(libro.autor);
console.log(libro.añoDePublicacion);

// 2. Anidación de Objetos:
// Crea un objeto llamado estudiante con propiedades nombre, edad y direccion. 
//direccion debe ser otro objeto con propiedades calle, ciudad y pais. Imprime la dirección completa del estudiante.

let estudiante = {
    nombre: "Juan Pérez",
    edad: 21,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Ciudad Ficticia",
        pais: "País Imaginario"
    }
};

console.log(`${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);

// 3. Métodos en Objetos:
// Añade un método llamado descripción al objeto libro que devuelva una cadena describiendo el título y el autor del libro. Invoca este método e imprime el resultado.

libro.descripcion = function() {
    return `${this.título} es un libro escrito por ${this.autor}.`;
};

console.log(libro.descripcion());

// 4. Iteración sobre Propiedades de un Objeto:
// Crea un objeto producto con propiedades como nombre, precio y disponible. 
//Usa un bucle for...in para imprimir todas las propiedades y sus valores.

let producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

// 5. Actualización de Propiedades:
// Modifica el valor de la propiedad precio del objeto producto y luego imprime el objeto completo para verificar el cambio.

producto.precio = 1000;
console.log(producto);

// 6. Comprobación de Propiedades:
// Crea una función llamada tienePropiedad que tome un objeto y una cadena como parámetros, 
//y devuelva true si el objeto tiene una propiedad con ese nombre, o false en caso contrario.

function tienePropiedad(obj, propiedad) {
    return obj.hasOwnProperty(propiedad);
}

console.log(tienePropiedad(producto, "precio")); // true
console.log(tienePropiedad(producto, "color"));  // false

// 7. Eliminación de Propiedades:
// Elimina la propiedad disponible del objeto producto. Imprime el objeto antes y después de eliminar la propiedad.

console.log(producto); // Antes de eliminar
delete producto.disponible;
console.log(producto); // Después de eliminar

// 8. Combinar Objetos:
// Usa Object.assign para combinar dos objetos, persona1 y persona2, en un nuevo objeto. Imprime el resultado.

let persona1 = {
    nombre: "Ana",
    edad: 30
};

let persona2 = {
    ciudad: "Madrid",
    pais: "España"
};

let personaCombinada = Object.assign({}, persona1, persona2);
console.log(personaCombinada);


// 9. Copiar Objetos:
// Crea una copia profunda del objeto estudiante utilizando el método JSON.parse y JSON.stringify. 
//Modifica la copia y verifica que el objeto original no haya sido alterado.

let copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
copiaEstudiante.nombre = "Carlos";
console.log(estudiante);       // Objeto original
console.log(copiaEstudiante);  // Copia modificada

// 10. Métodos Getters y Setters:
// Añade un getter y un setter al objeto libro para la propiedad añoDePublicacion. 
//Usa el setter para actualizar el año de publicación y luego usa el getter para leerlo.

Object.defineProperty(libro, 'añoDePublicacion', {
    get: function() {
        return this._añoDePublicacion;
    },
    set: function(nuevoAño) {
        this._añoDePublicacion = nuevoAño;
    }
});

libro.añoDePublicacion = 1970;
console.log(libro.añoDePublicacion);