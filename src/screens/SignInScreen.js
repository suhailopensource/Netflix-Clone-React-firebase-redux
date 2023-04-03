import React from 'react'
import './SignInscreen.css'
import { useRef } from 'react';
import { auth } from '../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            // console.log(authUser);
        }).catch((err) => {
            alert(err.message);
        });
    };
    const SignIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            // console.log(authUser);
        }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <div className='SigninScreen'>
            <form>
                <h1>
                    Sign In
                </h1>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Password' />
                <button type='submit' onClick={SignIn}>Sign In</button>

                <h4><span className='signupscreen__gray'>
                    New to Netflix? </span>
                    <span className='signupscreen__link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
