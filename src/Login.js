import React from 'react';
import './AuthPages.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="authPage">
            <div className="authContainer">
                <h1>Log in or sign up</h1>
                <div className="authDivider"></div>
                
                <div className="authContent">
                    <h2>Welcome to Airbnb</h2>
                    
                    <form className="authForm">
                        <div className="formGroup">
                            <input type="text" placeholder="Phone number" />
                        </div>
                        <p className="authNote">
                            We'll call or text you to confirm your number. Standard message and data rates apply.
                        </p>
                        <button type="submit" className="authButton">Continue</button>
                    </form>
                    
                    <div className="authDivider">or</div>
                    
                    <button className="authSocialButton">
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Facebook" />
                        Continue with Facebook
                    </button>
                    <button className="authSocialButton">
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
                        Continue with Google
                    </button>
                    <button className="authSocialButton">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Apple" />
                        Continue with Apple
                    </button>
                    <button className="authSocialButton">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
                        Continue with Email
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;