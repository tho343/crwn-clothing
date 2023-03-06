import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";


const SignIn = ()=>{
    
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userRef = await createUserDocumentFromAuth(user); 
        console.log(userRef);      
    }
    return (
        <div>
            <h1> Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with google pop up</button>
            <SignUpForm/>
        </div>
    )
}
export default SignIn;