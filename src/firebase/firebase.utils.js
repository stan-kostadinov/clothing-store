import firebase from 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAHMFAk1Y5XIl4b5lV5w0C5x4L-txoUZy0",
    authDomain: "crwn-db-e4723.firebaseapp.com",
    projectId: "crwn-db-e4723",
    storageBucket: "crwn-db-e4723.appspot.com",
    messagingSenderId: "637448350006",
    appId: "1:637448350006:web:c2445383369a261f812b97"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;