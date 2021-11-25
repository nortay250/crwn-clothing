import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAPbhLdtZVaNgqWZJymA4vAE70V9poCQ_c",
    authDomain: "crwn-clothing-f0c1f.firebaseapp.com",
    projectId: "crwn-clothing-f0c1f",
    storageBucket: "crwn-clothing-f0c1f.appspot.com",
    messagingSenderId: "310175089807",
    appId: "1:310175089807:web:d245b8abda71a960e7dcfa",
    measurementId: "G-GRQV8WP9PZ"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log("error creating user", error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;