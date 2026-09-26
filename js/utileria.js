// ==========================================
// LIBRERÍA DE UTILIDADES - utileria.js
// ==========================================

// Valida si un correo electrónico tiene un formato válido
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Valida si una contraseña cumple los requisitos
function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    return regex.test(password);
}

// Valida si un texto contiene solamente letras y espacios
function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(nombre);
}

// Comprueba si una persona tiene al menos 18 años
function esMayorDeEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad >= 18;
}

// Convierte un texto a mayúsculas
function aMayusculas(texto) {
    return texto.toUpperCase();
}

// Convierte un texto a minúsculas
function aMinusculas(texto) {
    return texto.toLowerCase();
}

// Elimina espacios al principio y al final
function limpiarTexto(texto) {
    return texto.trim();
}