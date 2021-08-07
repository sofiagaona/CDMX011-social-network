import { pages } from './lib/templates.js';
import { sendSingUp } from './lib/data.js';

const main = document.getElementById('main');
const obj_menu_sign_up = document.getElementById('btn_menu_sign_up');
const sign_up_user_mane = document.getElementById('sign_up_user_mane');
const sign_up_email = document.getElementById('sign_up_email');
const sign_up_password1 = document.getElementById('sign_up_password1');
const sign_up_password2 = document.getElementById('sign_up_password2');
const sign_up_password_error = document.getElementById('sign_up_password_error');
const sign_up_form = document.getElementById('sign_up_form')


 
function fnSignUp(e) {
    e.preventDefault();
    if (sign_up_password1.value === sign_up_password2.value){
        let userOk = sendSingUp(sign_up_email.value, sign_up_password1.value)
        userOk == typeof Object ? 
        sign_up_password_error.innerHTML = "Registro exitoso" :
        sign_up_password_error.innerHTML = userOk    
}
    else {
        sign_up_password_error.innerHTML = "Las contraseñas no son iguales"
    } 
}

function fnRegister() {
    document.getElementById("sign_up_form").addEventListener("submit", fnSignUp);
}

document.getElementById('btn_menu_sign_up').addEventListener('click', ()=>{
    main.innerHTML = pages.signUp.template;
    fnRegister()
});


function funcionUno() {
    alert("hola")
    console.log("hola")
} 