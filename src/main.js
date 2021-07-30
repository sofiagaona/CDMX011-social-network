import object from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
const data = document.querySelector('#register');
const send = document.getElementById('showModal');
const loginForm = document.querySelector('#login');
const sendLogin = document.getElementById('showLoginModal');
send.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  modal.classList = 'show';
  document.getElementById('main').classList = 'hide';
});
// const boton = document.querySelector()
data.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector('#email').value;
  const signupPassword = document.querySelector('#password').value;
  object.userSignUp(signupEmail, signupPassword);
});

//LOGIN

sendLogin.addEventListener('click', () => {
  const modal = document.getElementById('loginModal');
  modal.classList = 'show';
  document.getElementById('main').classList = 'hide';
});
// const boton = document.querySelector()
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector('#loginEmail').value;
  const signupPassword = document.querySelector('#loginPassword').value;
  object.userLogin(signupEmail, signupPassword);
});
