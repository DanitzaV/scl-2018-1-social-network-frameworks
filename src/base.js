import firebase from 'firebase';

 const app =  firebase.initializeApp({
    apiKey: "AIzaSyBaCVuQLMnPY7t1tDM47wWn4zJ0_3sEI3I",
    authDomain: "red-social-react.firebaseapp.com",
    databaseURL: "https://red-social-react.firebaseio.com",
    projectId: "red-social-react",
    storageBucket: "red-social-react.appspot.com",
    messagingSenderId: "302140704808"
  });

  export default app;