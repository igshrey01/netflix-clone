import React,{useRef} from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase';
function SignUpScreen() {

    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            
            console.log(authUser);
        }
        ).catch((error)=>{
            alert(error.message);
        });

    };

    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message);
        });
    } ;
    return (
        
        <div className="signup">
        <form>
        <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email"/>
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button onClick= {signIn} type="submit">Sign In</button>
            <h4>New to Netflix ? <span onClick={register} className="span">Sign Up now.</span></h4>
        </form>
        </div>
        
    )
}

export default SignUpScreen
