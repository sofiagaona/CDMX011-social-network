 const routes = {
    '/index': home,
    '/signUp': signUp,
    '/login': login
  };

  const rootDiv = document.getElementById('root');

//Ruteador
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
    rootDiv.innerHTML = routes[pathname]
    return false
};
window.onpopstate = () =>{
  rootDiv.innerHTML = routes[window.location.pathname]
}
/*const send = document.getElementById('showModal');
send.addEventListener('click', () => {
    
   
    onNavigate('/signUp');
  });  */   
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', () => {
    
    onNavigate('/login');
  });
   document.onload(onNavigate('/index'));
     
   
   const signUpButton = document.getElementById('signUpButton');
   signUpButton.addEventListener('click', () => {
     
     onNavigate('/signUp');
   });