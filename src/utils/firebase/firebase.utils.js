
import { initializeApp } from "firebase/app";
import{
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
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
const firebaseApp = initializeApp(firebaseConfig);

// create google auth provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if(!userAuth) return;
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
                createAt,
                ...additionalInformation,
            }) 
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email ||  !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email ||  !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}





