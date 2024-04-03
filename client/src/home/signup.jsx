import React, { useState } from 'react';
import './signu.css';
import axios from 'axios';

const Signup = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggle = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post('/api/signup', { username, email, password });
            if (response.status === 201) {
                // Redirect or show success message
            } else {
                setErrorMessage('Sign up failed');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('Sign up failed');
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', { username, password });
            if (response.status === 200) {
                // Redirect or show success message
            } else {
                setErrorMessage('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('Invalid credentials');
        }
    };

    return (
        <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
            <div className="row">
                {isSignIn ? (
                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in">
                                <a className="logo">A R T I Q U E '</a>
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button className='signin' onClick={handleSignIn}>
                                    Sign in
                                </button>
                                <p>
                                    <b>
                                        Forgot password?
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        Don't have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer">
                                        Sign up here
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <a className="logo">A R T I Q U E '</a>
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <button className='signup' onClick={handleSignUp}>
                                    Sign up
                                </button>
                                <p>
                                    <span>
                                        Already have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer">
                                        Sign in here
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Signup;
