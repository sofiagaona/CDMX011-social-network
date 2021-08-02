import object from './lib/index.js';

const routes = {
    '/': templates.home.template,
    '/signup': templates.signup.template,
    '/login': templates.login.template
};


const rootDiv = document.getElementById('root');

//Ruteador
rootDiv.innerHTML = routes[window.location.pathname];

function onNavigate(pathname) {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]

};

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]

}
document.addEventListener('load', onNavigate('/'));

const send = document.getElementById('showModal');
send.addEventListener('click', () => {
    onNavigate('/signup');
    getSignUpData()



});

//document.addEventListener('load', sendHome())



/*function sendHome() {
    const buttonSendHome = document.getElementById('logo');
    buttonSendHome.addEventListener('click', () => {
        onNavigate('/');
    })
}*/

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    onNavigate('/login');
    getLoginData()

});


const signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
    getSignUpData()

});


function getSignUpData() {
    document.getElementById('register').addEventListener('submit', (e) => {
        e.preventDefault();
        const signupEmail = document.querySelector('#email').value;
        const signupPassword = document.querySelector('#password').value;
        object.userSignUp(signupEmail, signupPassword);
        console.log(signupEmail, signupPassword)
    })
}

function getLoginData() {
    document.querySelector('#login').addEventListener('submit', (e) => {
        e.preventDefault();
        const signupEmail = document.querySelector('#loginEmail').value;
        const signupPassword = document.querySelector('#loginPassword').value;
        object.userLogin(signupEmail, signupPassword);
    });
}