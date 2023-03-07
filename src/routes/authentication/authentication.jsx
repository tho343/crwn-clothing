import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";



const Authentication = ()=>{
    
    return (
        <div className="authentication-container">
            
            
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default Authentication;