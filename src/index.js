import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAOgh8YqK99YslqBc5OBu4DaLSkKKmu3I",
    authDomain: "love-your-body.firebaseapp.com",
    databaseURL: "https://love-your-body.firebaseio.com",
    projectId: "love-your-body",
    storageBucket: "",
    messagingSenderId: "288945821020"
};
firebase.initializeApp(config);


ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
