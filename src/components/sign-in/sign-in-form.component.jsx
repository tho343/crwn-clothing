import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const signInWithGoogle = async () =>{
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user); 
       
}
const resetFormFields = () =>{
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(formFields);
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
        resetFormFields();
    } catch (error) {
        switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
    }
  };
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields,[name]:value});
    
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
      <FormInput
        label="email"
        required
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      ></FormInput>
      <FormInput
        label="password"
        required
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      ></FormInput>
      <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
     
      </form>
    </div>
  );
};
export default SignInForm;
