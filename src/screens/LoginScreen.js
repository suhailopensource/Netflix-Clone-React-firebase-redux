import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginScreen'>
            <div className='LoginScreen__background'>
                <img className="LoginScreen__logo" src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />
                <button onClick={() => {
                    setSignIn(true)
                }} className='loginScreen__button'>Sign In</button>
                <div className='loginscreen__gradient'></div>
            </div>

            <div className='loginScreen__body'>

                {signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                        <h2>Unlimited films, TV programmes and more.</h2>
                        <h3>Watch anywhere. Cancel at any time.</h3>
                        <h4>
                            Ready To Watch?Enter your email to create or restart your membership.
                        </h4>
                        <div className='loginScreen__input'>
                            <form>
                                <input type='email' placeholder='Email Address' />
                                <button
                                    onClick={() => {
                                        setSignIn(true)
                                    }} className='loginscreen__getStarted'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
