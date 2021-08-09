import React ,{useState} from 'react'
import './Login.css'
import SignUpScreen from './SignUpScreen.js'
function Login() {
    const [signIn,setSignIn]=useState(false);

    return (
        <div className="login">
            <div className="login_background">
                <img className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <button onClick={()=>setSignIn(true)}
                className="signin">
                    Sign In
                </button>

                <div className="gradient"/>
                </div>
                <div className="login_body">
                    {signIn ? (
                        <SignUpScreen/>
                    ) : (
                        <>
                    <h1 className="title">Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>    
                    <div className="input">
                        <form>
                            <input className="input1" type="email" placeholder="Email Address" />
                            <button onClick={()=>setSignIn(true)}
                            className="getstarted">Get Started {'>'} </button>
                        </form>
                    </div>
                </>  
                    )}
                </div>
            </div>


    )
}

export default Login
