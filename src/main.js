import object from './lib/index.js';



// Este es el punto de entrada de tu aplicacion
const data = document.querySelector('#register');
const loginForm = document.querySelector('#login');


// const boton = document.querySelector()
data.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector('#email').value;
  const signupPassword = document.querySelector('#password').value;
  object.userSignUp(signupEmail, signupPassword);
});

//LOGIN


// const boton = document.querySelector()
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector('#loginEmail').value;
  const signupPassword = document.querySelector('#loginPassword').value;
  object.userLogin(signupEmail, signupPassword);
});




