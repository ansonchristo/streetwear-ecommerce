import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAojJKMHk80n9iFqohdUMp1_a1g1VoeAQk",
    authDomain: "crown-db-b0974.firebaseapp.com",
    databaseURL: "https://crown-db-b0974.firebaseio.com",
    projectId: "crown-db-b0974",
    storageBucket: "crown-db-b0974.appspot.com",
    messagingSenderId: "632007755384",
    appId: "1:632007755384:web:55b4847ba32c80459f4f8d",
    measurementId: "G-Y5Z44PNY1D"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      
      const userRef = firestore.doc(`users/${userAuth.uid}`);  //documentRef

      const snapShot = await userRef.get(); //snapshot represents if the users is already in our data base 

      //to do a CRUD method, need documentRef
    
      if(!snapShot.exists) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch(error) {
              console.log('error creating user', error.message);

          }

      }
      return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;