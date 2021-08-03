import object from './src/lib/index.js';

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
    onNavigate('/');
    document.getElementById('showModal').addEventListener('click', () => {
        onNavigate('/signup');
        getSignUpData()
    })
    document.getElementById('signUpButton').addEventListener('click', () => {
        onNavigate('/signup');
        getSignUpData()
    });
    document.getElementById('loginButton').addEventListener('click', () => {
        onNavigate('/login');
        getLoginData()

    });



}
window.addEventListener('load', () => {
    onNavigate('/');
    document.getElementById('showModal').addEventListener('click', () => {
        onNavigate('/signup');
        getSignUpData()
    })
    document.getElementById('loginButton').addEventListener('click', () => {
        onNavigate('/login');
        getLoginData()

    });
    document.getElementById('signUpButton').addEventListener('click', () => {
        onNavigate('/signup');
        getSignUpData()
    });
    document.getElementById('logo').addEventListener('click', () => {
        onNavigate('/signup');
        getSignUpData()
    });

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
    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault();
        const signupEmail = document.querySelector('#loginEmail').value;
        const signupPassword = document.querySelector('#loginPassword').value;
        object.userLogin(signupEmail, signupPassword);
    });
}