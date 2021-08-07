export function sendSingUp(email, password) {
  let message;

  message = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential;
      return "registro exitoso";
    })
    .catch((error) => {
      var errorMessage = error.message;
      return "registro no  exitoso";
     

    });
   
  return message
}
