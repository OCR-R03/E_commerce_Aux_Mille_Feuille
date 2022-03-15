// La configuration Firebase de l'application Web

import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const firebaseConfig = {

    apiKey: "AIzaSyCS9x1lZLmM45HHNcQUf0Lbj1BrL5AiKUE",
  
    authDomain: "e-commerce-aux-mille-feuilles.firebaseapp.com",
  
    projectId: "e-commerce-aux-mille-feuilles",
  
    storageBucket: "e-commerce-aux-mille-feuilles.appspot.com",
  
    messagingSenderId: "172295165749",
  
    appId: "1:172295165749:web:3ee8617383664b45cfde7c"
  
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export { auth, googleAuthProvider, facebookAuthProvider}
  