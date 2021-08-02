const templates = {
    home: {
        path: '/',
        template: `<section id='main'><figure class='slide'><img src='src/logo.png'><h2>Join to the biggest animal lovers community in the world!</h2><input id='showModal'type='button' value='SignUp' <a href='#modal'></a></figure></section>`
    },
    signup: {
        path: '/sigunp',
        template: `<section id='modal' class='modal'><form id='register' class='modal-content flex'><label for='register'>Ingresa tus datos</label><input id='username'type='text' placeholder='Ingresa tu nombre de usuario' required><input id='email' type='email' placeholder='Ingresa tu correo electronico'required><input id='password' type='password' placeholder='Contraseña nueva' required><input id='register-button' type='submit' value='Registrarse 'class='register-button'></form></section>`
    },
    login: {
        path: '/login',
        template: `<section id='loginModal' class='modal'><form id='login' class='modal-content flex'><label for='login'>Ingresa tus datos</label><input id='loginEmail'type='email' placeholder='Ingresa tu correo electronico' required><input id='loginPassword' type='password' placeholder='Contraseña nueva' required><input id='loginButton' type='submit' value='Iniciar Sesión' class='register-button'>`
    }
}