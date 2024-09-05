import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './signup.css';
import photo1 from '../img/P1.png';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'; 

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [isSignIn, setIsSignIn] = useState(true);
    const [googleUserData, setGoogleUserData] = useState({});
    const [showUsername, setShowUsername] = useState(true);
    const [username, setUsername] = useState('');
    const [done, setDone] = useState(false);
    const clientID = '905257784376-mocejr5rvb0n1scjap52mp5pep5k5cuf.apps.googleusercontent.com';

    useEffect(() => {
        const initGoogleSignIn = () => {
            window.gapi.load('auth2', () => {
                const auth2 = window.gapi.auth2.init({
                    client_id: clientID,
                    scope: 'email',
                });
            });
        };

        initGoogleSignIn();
    }, []);

    const onSubmit = async (values) => {
        if (values.password !== values.confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Confirm Password and password must match',
            });
            return;
        }

        try {
                const res = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/signup', values);
                localStorage.setItem('userID', res.data._id);
                navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    const createUserSignup = async () => {
        try {
            const response = await axios.post(`https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/googleAuthSignup/${username}`, googleUserData);
            localStorage.setItem('userID', response.data._id);
            localStorage.setItem('user', true);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    const handleUsername = async () => {
        setDone(true);
        try {
            const response = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/userExists', { username });
            if (response.status === 200) {
                createUserSignup();
            } else {
                setDone(false);
                alert('Username Not Available');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const createUser = async (data) => {
        setGoogleUserData(data);
        setShowUsername(false);
    };

    const loginUser = async (data) => {
        try {
            const response = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/googleAuthLogin', data);
            if (response.status === 201) {
                localStorage.setItem('userID', response.data._id);
                localStorage.setItem('user', true);
            }
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    const onSuccess = async (res) => {
        const decoded = jwtDecode(res.credential);
        try {
            const data = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/googleAuthID', decoded);
            if (data.status === 200) {
                createUser(decoded);
            } else if (data.status === 201) {
                loginUser(decoded);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onFailure = (res) => {
        console.log('Login Failed, Res -> ', res);
    };

    return (
        <div>
            <div className='signup-container'>
                <div className='left-design'>
                    <div className='left-col'>
                        <p className='left-text'>Share your <br />vision. Sign In and <br />inspire others <br /> with your art.</p>
                        <img src={photo1} alt="" className='left-img' />
                    </div>
                </div>
                <div className='right-design'>
                    <div className='right-container'>
                        <a className="logo-signup">A R T I Q U E '</a>
                        {showUsername && (
                            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder='Enter Username' className='signup-input' {...register("username", { required: 'Username is Required' })} />
                                {errors.username && <p className='red'>{errors.username.message}</p>}
                                <input type="text" placeholder='Email' className='signup-email' {...register("email", { required: 'Email is Required' })} />
                                {errors.email && <p className='red'>{errors.email.message}</p>}
                                <input type="password" placeholder='Password' className='signup-password' {...register("password", { required: 'Password is Required', minLength: 6 })} />
                                {errors.password && <p className='red'>{errors.password.message}</p>}
                                <input type="password" placeholder='Confirm Password' className='signup-con-pass' {...register("confirmPassword", { required: 'Confirm your Password' })} />
                                {errors.confirmPassword && <p className='red'>{errors.confirmPassword.message}</p>}
                                <button type='submit' className='right-button'>Sign Up</button>
                                <div className="line-container">
                                    <div className="myLine1"></div>
                                    <div className="or">OR</div>
                                    <div className="myLine2"></div>
                                </div>
                                <div className="custom-google-login-button">
                                    <GoogleLogin
                                        onSuccess={onSuccess}
                                        onError={onFailure}
                                        className='padding'
                                        text="continue_with"
                                        size='medium'
                                        width='300'
                                    />
                                </div>
                                <p>Already have an account? <a onClick={() => navigate('/login')}>Login</a></p>
                            </form>
                        )}
                        {!showUsername && (
                            <div className="signup-username">
                                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" className='signup-input' />
                                {done ? <button className='submitUsername'>SUBMIT</button> : <button className='submitUsername' onClick={handleUsername}>SUBMIT</button>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
