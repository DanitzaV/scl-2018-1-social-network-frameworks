import firebase from 'firebase';
import * as firebaseui from 'firebaseui'

const app =  firebase.initializeApp({
  apiKey: "AIzaSyBaCVuQLMnPY7t1tDM47wWn4zJ0_3sEI3I",
  authDomain: "red-social-react.firebaseapp.com",
  databaseURL: "https://red-social-react.firebaseio.com",
  projectId: "red-social-react",
  storageBucket: "red-social-react.appspot.com",
  messagingSenderId: "302140704808"
});

export const providerGG = new firebase.auth.GoogleAuthProvider();
export const providerFB = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth();
export default app;
