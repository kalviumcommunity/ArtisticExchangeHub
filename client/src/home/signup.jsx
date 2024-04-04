import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './signu.css';
// import signinimg from '../img/P1.jpeg'

const Signup = () => {
    const navigate = useNavigate(); 
    const [isSignIn, setIsSignIn] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSignIn(true);
        }, 200);
    }, []);

    const toggle = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
            {/* FORM SECTION */}
            <div className="row">
                {/* SIGN UP */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-up">
                            <a   className="logo">A R T I Q U E '</a>
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
                        <a   className="logo">A R T I Q U E '</a>
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input className='signinborder' type="text" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input className='signinborder' type="password" placeholder="Password" />
                            </div>
                            <button className='signin'>
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
                    <div className="form-wrapper">
                        {/* Additional content if needed */}
                    </div>
                </div>
                {/* END SIGN IN */}
            </div>
            {/* END FORM SECTION */}
            {/* CONTENT SECTION */}
            <div className="row content-row">
                {/* SIGN IN CONTENT */}
                <div className="col align-items-center flex-col">
                    <div className="text sign-in">
                        <h2>
                            Welcome 
                        </h2>
                    </div>
                    <div className="img sign-in">
                        {/* Sign in image or content */}
                        {/* <img src={signinimg} alt="" /> */}
                    </div>
                </div>
                {/* END SIGN IN CONTENT */}
                {/* SIGN UP CONTENT */}
                <div className="col align-items-center flex-col">
                    <div className="img sign-up">
                        {/* Sign up image or content */}
                        {/* <img src={signinimg} alt="" /> */}
                    </div>
                    <div className="text sign-up">
                        <h2>
                            Join with us
                        </h2>
                    </div>
                </div>
                {/* END SIGN UP CONTENT */}
            </div>
            {/* END CONTENT SECTION */}
        </div>
    );
};

export default Signup;

