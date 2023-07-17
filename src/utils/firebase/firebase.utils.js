import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8e-0t3JSmll7gJ83XPe9gTQZkfbn5vyY',
  authDomain: 'e-commerce-db-5d28e.firebaseapp.com',
  projectId: 'e-commerce-db-5d28e',
  storageBucket: 'e-commerce-db-5d28e.appspot.com',
  messagingSenderId: '289127293423',
  appId: '1:289127293423:web:6773100ddbf43dd850961a',
};

const firebaseApp = initializeApp(firebaseConfig);

// You can have multiple different providers - you might have different button that trigger different events
const provider = new GoogleAuthProvider();
// Every time someone interacts with provider we'll force them to select an account
provider.setCustomParameters({
  prompt: 'select_account',
});

// getAuth - is a singleton - is should always be the same one for the entire app
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialte Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  //   Allows us to access the data
  const userSnapshot = await getDoc(userDocRef);

  //   if the user snapshot does not exists, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
