// 1. Consumo de Datos desde una API:
// Crea una función llamada obtenerUsuarios que haga una petición HTTP a la
// API https://jsonplaceholder.typicode.com/users usando fetch. Luego, imprime en la consola la lista de usuarios obtenida.

async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        console.log(usuarios);
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

// 2. Procesamiento de Datos de una API:
// Usando la función obtenerUsuarios, crea otra función llamada imprimirNombresDeUsuarios que filtre y
// muestre solo los nombres de los usuarios.

async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();
    const nombres = usuarios.map(usuario => usuario.name);
    console.log(nombres);
}

// 3. Autenticación Simulada:
// Crea una función llamada autenticarUsuario que tome un objeto credenciales con usuario y contraseña, y 
//verifique si coinciden con un usuario predefinido. 
//La función debe devolver true si la autenticación es exitosa y false en caso contrario.

function autenticarUsuario(credenciales) {
    const usuarioPredefinido = { usuario: 'admin', contraseña: '1234' };
    return credenciales.usuario === usuarioPredefinido.usuario && credenciales.contraseña === usuarioPredefinido.contraseña;
}

// 4. Transformación de Datos:
// Crea una función llamada mapearUsuarios que tome un array de usuarios obtenidos de la API 
//y devuelva un nuevo array con solo las propiedades nombre y email de cada usuario.

function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
}

// 5. Validación de Formularios:
// Crea una función llamada validarFormulario que tome un objeto con los campos nombre, email y password. 
//La función debe devolver true si todos los campos están presentes y no están vacíos, y false en caso contrario.

function validarFormulario(campos) {
    const { nombre, email, password } = campos;
    return nombre && email && password ? true : false;
}

// 6. Paginación de Datos:
// Crea una función llamada obtenerPagina que tome un array de datos y un número de página. 
//La función debe devolver los elementos correspondientes a esa página, asumiendo que cada página tiene 5 elementos.

function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

// Llamadas a las funciones
async function ejecutarEjercicios() {
    // Llamada al ejercicio 1
    const usuarios = await obtenerUsuarios();
    
    // Llamada al ejercicio 2
    await imprimirNombresDeUsuarios();

    // Llamada al ejercicio 3
    const credenciales = { usuario: 'admin', contraseña: '1234' };
    const autenticado = autenticarUsuario(credenciales);
    console.log('Autenticación exitosa:', autenticado);

    // Llamada al ejercicio 4
    const usuariosMapeados = mapearUsuarios(usuarios);
    console.log('Usuarios mapeados:', usuariosMapeados);

    // Llamada al ejercicio 5
    const camposFormulario = { nombre: 'Juan', email: 'juan@example.com', password: 'abcd1234' };
    const formularioValido = validarFormulario(camposFormulario);
    console.log('Formulario válido:', formularioValido);

    // Llamada al ejercicio 6
    const pagina = obtenerPagina(usuarios, 1);
    console.log('Primera página de usuarios:', pagina);
}

// Ejecutar todos los ejercicios
ejecutarEjercicios();