import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signu.css';

const Signup = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            if (!signInUsername || !signInPassword) {
                alert('Please enter your username and password');
            } else {
                const response = await axios.post(`https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/login`, { username: signInUsername, password: signInPassword });
                if (response.status === 200) {
                    sessionStorage.setItem('login', true);
                    sessionStorage.setItem('username', signInUsername);
                    alert('Login successful');
                    navigate('/');
                } else if (response.status === 401) {
                    alert('Invalid user credentials');
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    const toggle = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
            <div className="row">
                {/* SIGN UP */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-up">
                            <a className="logo">A R T I Q U E '</a>
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input className='signupborder' type="text" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <i className='bx bx-mail-send'></i>
                                <input className='signupborder' type="email" placeholder="Email" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input className='signupborder' type="password" placeholder="Password" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input className='signupborder' type="password" placeholder="Confirm password" />
                            </div>
                            <button className='signup' onClick={() => navigate('/')}>
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

                {/* END SIGN UP */}

                {/* SIGN IN */}
                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-in">
                            <a className="logo">A R T I Q U E '</a>
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input
                                    className='signinborder'
                                    type="text"
                                    placeholder="Username"
                                    value={signInUsername}
                                    onChange={(e) => setSignInUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input
                                    className='signinborder'
                                    type="password"
                                    placeholder="Password"
                                    value={signInPassword}
                                    onChange={(e) => setSignInPassword(e.target.value)}
                                />
                            </div>
                            <button className='signin' onClick={handleLogin}>
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
                {/* END SIGN IN */}
            </div>
            {/* Additional content if needed */}
        </div>
    );
};

export default Signup;
