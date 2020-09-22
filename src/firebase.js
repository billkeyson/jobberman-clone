import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6_Pu2L26yjhDZA6GdRG6AfEtfJvGoO7s",
    authDomain: "jobberman-clone.firebaseapp.com",
    databaseURL: "https://jobberman-clone.firebaseio.com",
    projectId: "jobberman-clone",
    storageBucket: "jobberman-clone.appspot.com",
    messagingSenderId: "55386718625",
    appId: "1:55386718625:web:4aec2ef9f466d132904be0"
  };
  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const db  = firebaseApp.firestore();
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()
 export {auth,provider}
 export default db