const templates = {
    home: {
        path: '/',
        template: `<head><nav class='nav'><h1 id='logo'><img src='logoNav.png'></h1><div><li><a id='loginButton'>Login</a></li><li><a id='signUpButton'>SignUp</a></li><li><a>Logout</a></li></div></nav></head><section id='main'><figure class='slide'><img src='logo.png'><h2>Join to the biggest animal lovers community in the world!</h2><input id='showModal'type='button' value='SignUp'></figure></section>`
    },
    signup: {
        path: '/sigunp',
        template: `<section id='modal' class='modal'><form id='register' class='modal-content flex'><label for='register'>Ingresa tus datos</label><input id='username'type='text' placeholder='Ingresa tu nombre de usuario' required><input id='email' type='email' placeholder='Ingresa tu correo electronico'required><input id='password' type='password' placeholder='Contraseña nueva' required><input id='register-button'type='submit' value='Registrarse'></form></section>`
    },
    login: {
        path: '/login',
        template: `<section id='loginModal' class='modal'><form id='login' class='modal-content flex'><label for='login'>Ingresa tus datos</label><input id='loginEmail'type='email' placeholder='Ingresa tu correo electronico' required><input id='loginPassword' type='password' placeholder='Contraseña nueva' required><input id='login-button' type='submit' value='Iniciar Sesión'>`
    }
}