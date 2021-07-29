// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();
const data = document.querySelector('#register');
// const boton = document.querySelector()
data.addEventListener('submit', (e) =>{
e.preventDefault();
const signupPassword = document.querySelector('#password').value; 
console.log(signupPassword)
const signupEmail = document.querySelector('#email').value;
console.log(signupEmail)
auth
.createUserWithEmailAndPassword(signupEmail, signupPassword)
.then((userCredential)=>{console.log('Password y email')})
.catch(()=>{console.log('error')})
})
