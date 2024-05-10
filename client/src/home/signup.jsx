import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import './signu.css';

const Signup = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [id, setId] = useState("")

    useEffect(() => {
        console.log(id)
    }, [id])

    const handleAuth = async () => {
        alert("SUCCCESSS")
        const access = axios.post('http://localhost:3000/auth', { username: signInUsername, password: signInPassword })
            .then(access => {
                console.log(access)
                document.cookie = "ACCESS_TOKEN=" + access.data.accessToken + "; expires=Thu, 22 Dec 2050 12:00:00 UTC; path=/"
            })
            .catch(err => console.log(err))
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            if (!signInUsername || !signInPassword) {
                alert('Please enter your username and password');
            } else {
                const passData = {
                    "username": signInUsername,
                    "password": signInPassword
                }
                const response = await axios.post(`https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/login`, passData);
                if (response.status === 200) {
                    handleAuth()
                    sessionStorage.setItem('login', true);
                    sessionStorage.setItem('username', signInUsername);
                    alert('Login successful');
                    const userdata = axios.post(`https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/getID`, passData)
                        .then(userdata => {
                            console.log(passData)
                            console.log("USERDATA IS ", userdata)
                            setId(userdata.data._id)
                            sessionStorage.setItem("userID", userdata.data._id)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    navigate('/');
                } else {
                    alert('Invalid user credentials');
                }
            }
        } catch (err) {
            console.error(err);
            alert('invalid user credentials')
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            if (!username || !password || !repeatPassword) {
                alert("Please fill in all fields");
            } else if (password !== repeatPassword) {
                alert("Passwords do not match");
            } else if (password.length < 6) {
                alert("Password should contain at least 6 characters");
            } else {
                const response = await axios.post(
                    " https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/signup",
                    { username, password }
                );
                if (response.status === 200) {
                    navigate("/");
                    alert("Signup successful");
                }
            }
        } catch (err) {
            console.error(err);
            alert("Username already exists");
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
                                <i className="bx bxs-user"></i>
                                <input
                                    className="signupborder"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <i className="bx bxs-lock-alt"></i>
                                <input
                                    className="signupborder"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <i className="bx bxs-lock-alt"></i>
                                <input
                                    className="signupborder"
                                    type="password"
                                    placeholder="Confirm password"
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                />
                            </div>
                            <button className="signup" onClick={handleSignup}>
                                Sign up
                            </button>
                            <p>
                                <span>Already have an account?</span>
                                <b onClick={toggle} className="pointer">
                                    Sign up here
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
        </div>
    );
};

export default Signup;
