// aqui exportaras las funciones que necesites
// export const myFunction = () => {
// };

const object = {
  userSignUp(a, b) {
  auth

      .createUserWithEmailAndPassword(a, b)
      .then((userCredential) => {console.log('registro exitoso');})
      .catch(() => { console.log('error'); });
  },
  userLogin(a, b) {
    auth
      .signInWithEmailAndPassword(a, b)
      .then((userCredential) => {console.log('login exitoso');})
      .catch(() => { console.log('error'); });
  },
};
export default object;
