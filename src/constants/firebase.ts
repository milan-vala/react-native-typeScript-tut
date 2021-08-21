import firebase from 'firebase/app'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyCrbULcmro6lFBjpIjx68EEBtqUr7TBgk8",
    authDomain: "reactnativetut-f77f0.firebaseapp.com",
    projectId: "reactnativetut-f77f0",
    storageBucket: "reactnativetut-f77f0.appspot.com",
    messagingSenderId: "454553535437",
    appId: "1:454553535437:web:5e0219df58fa53d557fa84"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }