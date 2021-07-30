// aqui exportaras las funciones que necesites
// export const myFunction = () => {
// };

const object = {
  userSignUp(a, b) {
  auth

      .createUserWithEmailAndPassword(a, b)
      .then((userCredential) => {})
      .catch(() => { console.log('error'); });
  },
};
export default object;
