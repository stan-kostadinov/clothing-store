import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { userRef } from 'react';

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
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();
  
  if ( !snapShot.exists ) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (err) {
      console('error creating user', err.message);;
    }
  }

  return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {

  const transformedCollection = collections.docs.map(
    doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    }
  );
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    } , {})
}

export const addCollectionAndDocuments = async ( collectionKey, objectToAdd ) => {

  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })

  return await batch.commit();

}

export default firebase;