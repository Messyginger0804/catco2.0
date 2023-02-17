import React, { useState } from 'react'
import './Login.css'
import logo from '../../../src/assets/catco-logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { auth, getAuth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

// src/assets/catco-logo.jpg

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log(userCred)
                if (userCred) {
                    navigate('/');
                }
            }).catch((error) => {
                console.log(error, 'not loggedd in')
            })

    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log(userCred);
                if (userCred) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className='login-catcoLogo' src={logo} alt="catco-logo" />
            </Link>

            <div className="login-container">
                <h1>sign-in</h1>

                <form>
                    <h5>e-mail</h5>
                    <input type='email' onChange={e => setEmail(e.target.value)} />
                    <h5>password</h5>
                    <input type="password" onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login-signInButton'>sign-in</button>
                </form>
                <p>by signing-in you agree to Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam, temporibus, voluptates mollitia..</p>

                <button type='submit' onClick={register} className='login-registerButton'> register here</button>

            </div>
        </div>

    )
}

export default Login