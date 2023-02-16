import React from 'react'
import './Login.css'
import logo from '../../../src/assets/catco-logo.jpg'
import { Link } from 'react-router-dom';

// src/assets/catco-logo.jpg

function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <img className='login-catcoLogo' src={logo} alt="catco-logo" />
            </Link>

            <div className="login-container">
                <h1>sign-in</h1>

                <form>
                    <h5>e-mail</h5>
                    <input type='email' />
                    <h5>password</h5>
                    <input type="password" />

                    <button className='login-signInButton'>sign-in</button>
                </form>
                <p>by signing-in you agree to Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam, temporibus, voluptates mollitia..</p>

                <button className='login-registerButton'> register here</button>

            </div>
        </div>

    )
}

export default Login