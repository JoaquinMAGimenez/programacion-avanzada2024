// 7. Envío de Datos a una API
//Crea una función llamada enviarDatos que tome un objeto data y haga una petición POST a la API
//   https://jsonplaceholder.typicode.com/posts. La función debe imprimir la respuesta de la API.

async function enviarDatos(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log('Respuesta de la API:', responseData);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

// 8. Búsqueda de Usuarios
//Crea una función llamada buscarUsuarioPorEmail que tome un array
//de usuarios y un email como parámetros, y devuelva el usuario que
//coincida con el email proporcionado. Usa el método find paraimplementarlo.

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

// 9. Generación de Token de Autenticación
//Crea una función llamada generarToken que tome un objeto usuario
//y devuelva un token JWT simulado como una cadena. Puedes usar
//una función como btoa (Base64) para simular la generación deltoken.

function generarToken(usuario) {
    const token = btoa(JSON.stringify(usuario));
    return token;
}

// 10. Actualización de Información del Usuario
//Crea una función llamada actualizarUsuario que tome un objeto
//usuario y una lista de cambios a aplicar. La función debe retornar el usuario con las propiedades actualizadas.

function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}

// Llamadas a las funciones

const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
};
enviarDatos(data);

const usuarios = [
    { id: 1, email: 'example@example.com', name: 'John Doe' },
    { id: 2, email: 'jane@example.com', name: 'Jane Doe' }
];

const usuarioEncontrado = buscarUsuarioPorEmail(usuarios, 'jane@example.com');
console.log('Usuario encontrado:', usuarioEncontrado);

const usuario = { id: 1, name: 'John Doe' };
const token = generarToken(usuario);
console.log('Token generado:', token);

const usuarioActualizado = actualizarUsuario(usuario, { name: 'John Smith' });
console.log('Usuario actualizado:', usuarioActualizado);