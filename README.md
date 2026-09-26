# Utilería JS — Librería de Validaciones

## Portada
**Nombre:**  Rojas Fernando
**Lenguaje:** JavaScript
**Tecnologías utilizadas:** HTML5, CSS3 y JavaScript

### ¿Qué problema resuelve?

La verdad no resuelve nada que librerias como Parsley, JustValidate o PrsitineJS no resuelvan, pero
en lo que se enfoca no es en la resolución del problemas, si no en la implementación de librerias en 
HTML, usando como base JavaScript. Además de que fungir como una mera forma de de realizar un 
ejercicio pracitco para el aprendizaje de las tecnología implementas.

---

# Estructura del proyecto

```text
utileria/
│
├── README.md
├── index.html
├── login.html
│
├── css/
│   └── style.css
│
├── js/
│   └── utileria.js
│
└── img/
    └── imagenes utilizadas
```

---

# Instalación

Para utilizar la librería solamente es necesario incluir el archivo JavaScript dentro del documento HTML.

```html
<script src="../js/utileria.js"></script>
```

También se debe incluir la hoja de estilos:

```html
<link rel="stylesheet" href="../css/style.css">
```

Una vez incluidos estos archivos, las funciones de la librería pueden utilizarse directamente desde JavaScript.

---

# Funciones obligatorias

## 1. validarCorreo(correo)

Valida que una cadena tenga un formato básico de correo electrónico.

### Parámetro

* `correo`: cadena que contiene el correo electrónico que se desea comprobar.

### Retorno

Devuelve `true` si el correo tiene un formato válido y `false` en caso contrario.

### Ejemplo

```javascript
const correo = "usuario@gmail.com";

if (validarCorreo(correo)) {
    console.log("Correo válido");
} else {
    console.log("Correo inválido");
}
```

---

## 2. soloLetras(texto)

Comprueba que un texto contenga únicamente letras, espacios y vocales acentuadas.

La función permite caracteres como:

* Letras mayúsculas.
* Letras minúsculas.
* Vocales acentuadas.
* La letra ñ.
* Espacios.

### Parámetro

* `texto`: cadena que se desea validar.

### Retorno

Devuelve `true` cuando el texto solamente contiene letras válidas y `false` cuando contiene números u otros caracteres no permitidos.

### Ejemplo

```javascript
console.log(soloLetras("María López"));
// true

console.log(soloLetras("María123"));
// false
```

---

## 3. validarLongitud(numero, maxLongitud)

Comprueba que la cantidad de caracteres de un número no supere la longitud máxima indicada.

### Parámetros

* `numero`: número que se desea validar.
* `maxLongitud`: cantidad máxima de caracteres permitidos.

### Retorno

Devuelve `true` si el número cumple con la longitud indicada y `false` si la supera.

### Ejemplo

```javascript
console.log(validarLongitud(12345, 5));
// true

console.log(validarLongitud(123456, 5));
// false
```

---

## 4. calcularEdad(fechaNacimiento)

Calcula la edad de una persona a partir de su fecha de nacimiento.

La función considera el año, mes y día actuales para obtener la edad exacta.

### Parámetro

* `fechaNacimiento`: fecha de nacimiento en formato `YYYY-MM-DD`.

### Retorno

Devuelve la edad como un número entero.

### Ejemplo

```javascript
const edad = calcularEdad("2000-05-20");

console.log("Edad:", edad);
```

---

## 5. esMayorDeEdad(fechaNacimiento)

Determina si una persona tiene 18 años o más.

Esta función utiliza el cálculo de edad para determinar si la persona es mayor de edad.

### Parámetro

* `fechaNacimiento`: fecha de nacimiento en formato `YYYY-MM-DD`.

### Retorno

Devuelve `true` si la persona tiene 18 años o más y `false` si es menor de edad.

### Ejemplo

```javascript
const fecha = "2000-05-20";

if (esMayorDeEdad(fecha)) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}
```

---

## 6. validarPassword(password)

Comprueba que una contraseña cumpla con los requisitos mínimos de seguridad.

La contraseña debe contener:

* Al menos 8 caracteres.
* Una letra mayúscula.
* Una letra minúscula.
* Un número.
* Un carácter especial.

### Parámetro

* `password`: contraseña que se desea validar.

### Retorno

Devuelve `true` si cumple todos los requisitos y `false` si no los cumple.

### Ejemplo

```javascript
const password = "Hola123!";

if (validarPassword(password)) {
    console.log("Contraseña válida");
} else {
    console.log("Contraseña inválida");
}
```

---

# Funciones adicionales

Las funciones adicionales estan ocultas en la pagina web, si las encuentras estara muy divertido, pero no las voy a revelar.

---

# Uso de la librería

Para utilizar las funciones primero se debe incluir el archivo `utileria.js`.

```html
<script src="../js/utileria.js"></script>
```

Después las funciones pueden utilizarse desde JavaScript.

Por ejemplo:

```javascript
const correo = "usuario@gmail.com";
const password = "Hola123!";

console.log("Correo:", validarCorreo(correo));
console.log("Password:", validarPassword(password));
```

Resultado esperado:

```text
Correo: true
Password: true
```

---

# Integración con el formulario

La librería se utiliza dentro del formulario de registro para comprobar los datos antes de permitir el registro.

El formulario contiene campos para:

* Nombre y apellido.
* Correo electrónico.
* Fecha de nacimiento.
* Contraseña.

Las validaciones se ejecutan cuando el usuario abandona cada campo y también cuando intenta enviar el formulario.

Ejemplo de integración:

```javascript
regName.addEventListener("blur", () => {
    toggleError(
        regName,
        "reg-name-error",
        soloLetras(regName.value)
    );
});

regEmail.addEventListener("blur", () => {
    toggleError(
        regEmail,
        "reg-email-error",
        validarCorreo(regEmail.value)
    );
});

regDob.addEventListener("blur", () => {
    toggleError(
        regDob,
        "reg-dob-error",
        esMayorDeEdad(regDob.value)
    );
});

regPassword.addEventListener("blur", () => {
    toggleError(
        regPassword,
        "reg-password-error",
        validarPassword(regPassword.value)
    );
});
```

Cuando un dato no cumple las condiciones, se muestra un mensaje de error junto al campo correspondiente.

---

# Ventana modal

El proyecto utiliza la fecha de nacimiento para calcular la edad del usuario.

El funcionamiento es:

```text
Fecha de nacimiento
        ↓
calcularEdad()
        ↓
Edad del usuario
        ↓
Ventana modal
        ↓
Mostrar resultado
```

Ejemplo:

```javascript
const edad = calcularEdad(regDob.value);

console.log("Edad calculada:", edad);
```

La ventana modal permite mostrar visualmente al usuario la edad calculada y el resultado de la validación de mayoría de edad.

---

# Integración con Login

El formulario de inicio de sesión utiliza las funciones de validación de correo y contraseña.

El correo se comprueba mediante:

```javascript
validarCorreo(loginEmail.value);
```

La contraseña se comprueba mediante:

```javascript
validarPassword(loginPassword.value);
```

Ejemplo:

```javascript
loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const isEmailOk =
        validarCorreo(loginEmail.value);

    const isPasswordOk =
        validarPassword(loginPassword.value);

    if (isEmailOk && isPasswordOk) {
        alert("¡Inicio de sesión correcto!");
    }
});
```

De esta manera, el mismo archivo `utileria.js` puede reutilizarse tanto en el registro como en el inicio de sesión.

---

# Pruebas realizadas

Se realizaron pruebas con datos válidos e inválidos para comprobar el funcionamiento de las funciones.

Ejemplo de pruebas en consola:

```javascript
console.log(validarCorreo("usuario@gmail.com"));
console.log(validarCorreo("usuario@gmail"));

console.log(soloLetras("María López"));
console.log(soloLetras("María123"));

console.log(calcularEdad("2000-05-20"));

console.log(esMayorDeEdad("2000-05-20"));

console.log(validarPassword("Hola123!"));
console.log(validarPassword("hola"));
```

Resultados esperados:

```text
true
false

true
false

Edad calculada

true

true
false
```

---

# Capturas de pantalla

A continuación se muestran evidencias del funcionamiento de la librería.

## Consola de JavaScript

![Pruebas en consola](img/Screenshot%202026-09-25%20205605.png)

En esta captura se muestran los resultados obtenidos al ejecutar las funciones de la librería.

## Formulario de registro

![Formulario de registro](img/Screenshot%202026-09-25%20204549.png)

Se muestra el formulario utilizando las funciones de validación.

## Ventana modal

![Ventana modal](img/Screenshot%202026-09-25%20205220.png)

Se muestra la edad calculada mediante la función `calcularEdad()`.

## Login

![Login](img/Screenshot%202026-09-25%20204549.png)

Se muestra el formulario de inicio de sesión utilizando `validarCorreo()` y `validarPassword()`. 
Las verciones se puede acceder desde la mism parte. Se entiende que se decea redirigir al usuario a 
otra pagina, pero no hubiera sido divertido.

---

# GitHub Pages

El proyecto se encuentra publicado mediante GitHub Pages.

**Repositorio:** [https://github.com/HealedTick04/libreria-utilidades]

**GitHub Pages:** [https://healedtick04.github.io/libreria-utilidades/]

La página publicada permite probar directamente el formulario, las validaciones, la ventana modal y el inicio de sesión.
