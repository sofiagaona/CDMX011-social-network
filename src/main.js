import object from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
const data = document.querySelector('#register');
const send = document.getElementById('showModal');
send.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  modal.classList = 'show';
  document.getElementById('main').classList = 'opacity';
});
// const boton = document.querySelector()
data.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector('#email').value;
  const signupPassword = document.querySelector('#password').value;
  object.userSignUp(signupEmail, signupPassword);
});
