// funciones de validación 

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

function validateLetters(input) {
  const re = /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  return re.test(input.trim()) && input.trim().length > 0;
}

function calculateAge(birthDateString) {
  if (!birthDateString) return null;
  const [year, month, day] = birthDateString.split('-').map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function validateAge(birthDateString) {
  const age = calculateAge(birthDateString);
  return age !== null && age >= 18;
}

function validatePassword(password) {
  // Mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  return re.test(password);
}

//  FUNCIÓN DE APOYO VISUAL

function toggleError(inputElement, errorElementId, isValid) {
  const errorMsg = document.getElementById(errorElementId);
  if (isValid) {
    inputElement.classList.remove('error');
    errorMsg.classList.remove('visible');
  } else {
    inputElement.classList.add('error');
    errorMsg.classList.add('visible');
  }
  return isValid;
}


// INTEGRACIÓN CON FORMULARIO DE REGISTRO

const regForm = document.getElementById('registerForm');
const regName = document.getElementById('reg-name');
const regEmail = document.getElementById('reg-email');
const regDob = document.getElementById('reg-dob');
const regPassword = document.getElementById('reg-password');

// Eventos al salir de cada campo (blur)
regName.addEventListener('blur', () => toggleError(regName, 'reg-name-error', validateLetters(regName.value)));
regEmail.addEventListener('blur', () => toggleError(regEmail, 'reg-email-error', validateEmail(regEmail.value)));
regDob.addEventListener('blur', () => toggleError(regDob, 'reg-dob-error', validateAge(regDob.value)));
regPassword.addEventListener('blur', () => toggleError(regPassword, 'reg-password-error', validatePassword(regPassword.value)));

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNameOk = toggleError(regName, 'reg-name-error', validateLetters(regName.value));
  const isEmailOk = toggleError(regEmail, 'reg-email-error', validateEmail(regEmail.value));
  const isDobOk = toggleError(regDob, 'reg-dob-error', validateAge(regDob.value));
  const isPassOk = toggleError(regPassword, 'reg-password-error', validatePassword(regPassword.value));

  if (isNameOk && isEmailOk && isDobOk && isPassOk) {
    alert('¡Registro exitoso!');
    regForm.reset();
  }
});

// INTEGRACIÓN CON FORMULARIO DE LOGIN

const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

loginEmail.addEventListener('blur', () => toggleError(loginEmail, 'login-email-error', validateEmail(loginEmail.value)));
loginPassword.addEventListener('blur', () => toggleError(loginPassword, 'login-password-error', loginPassword.value.trim().length > 0));

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const isEmailOk = toggleError(loginEmail, 'login-email-error', validateEmail(loginEmail.value));
  const isPassOk = toggleError(loginPassword, 'login-password-error', loginPassword.value.trim().length > 0);

  if (isEmailOk && isPassOk) {
    alert('¡Inicio de sesión correcto!');
    loginForm.reset();
  }
});

// Mostrar o ocultar imagen al hacer clic en la frase
const easterEgg = document.getElementById('easterEggTrigger');
const imageContainer = document.getElementById('secretImageContainer');

if (easterEgg && imageContainer) {
  easterEgg.addEventListener('click', () => {
    imageContainer.classList.toggle('visible');
  });
}