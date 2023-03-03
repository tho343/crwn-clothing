
import { initializeApp } from "firebase/app";
import{
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBvRi2wxe-fv3uujuWIaZ1qB_H95XE19o",
  authDomain: "crwn-clothing-db-9c27a.firebaseapp.com",
  projectId: "crwn-clothing-db-9c27a",
  storageBucket: "crwn-clothing-db-9c27a.appspot.com",
  messagingSenderId: "866602050107",
  appId: "1:866602050107:web:ff990ef188d603b99eb21e"
};

// Initialize Firebase
const firebcaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);
    

    //if user doesnot exist, create/set a new one
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt  = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt
            }) 
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}



