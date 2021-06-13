import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDs0BbFnT-hgK915YvRSSK74_BxtdN2Xb0",
    authDomain: "askout-3ed11.firebaseapp.com",
    projectId: "askout-3ed11",
    storageBucket: "askout-3ed11.appspot.com",
    messagingSenderId: "570451021117",
    appId: "1:570451021117:web:2d13168a4e4bb32444c954",
    measurementId: "G-X6KRFDTNN3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  const authUser = new firebase.auth.GoogleAuthProvider()

  const db = firebase.firestore()

  export {auth, provider, authUser};
  export default db


