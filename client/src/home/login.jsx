import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [googleUserData, setGoogleUserData] = useState({});
  const [showUsername, setShowUsername] = useState(true);
  const [done, setDone] = useState(false);
  const [username, setUsername] = useState('');

  const clientID = "934760259390-idpvnt9md5ov9pr4lnoufcb0obh56eue.apps.googleusercontent.com";
  const onSubmit = async (values) => {
    try {
      const res = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/login', values);
      console.log('Login Response:', res.data.user); // Access nested user object
      if (res.status === 200) {
        localStorage.setItem('userID', res.data.user._id); // Access nested _id
        localStorage.setItem('user', true);
        navigate('/');
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      alert('Invalid Credentials');
    }
  };


  const onSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    console.log('Decoded Data:', decoded); // Debug the decoded token
    try {
      const data = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/googleAuthID', decoded);
      console.log('Google Auth Response:', data.data); // Debug the response
      if (data.status === 200) {
        createUser(decoded);
      } else if (data.status === 201) {
        loginUser(decoded);
      }
    } catch (err) {
      console.error('Google Auth Error:', err);
    }
  };


  const createUserSignup = async () => {
    try {
      const response = await axios.post(`https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/googleAuthSignup/${username}`, googleUserData);
      localStorage.setItem('userID', response.data._id);
      localStorage.setItem('user', true);
      navigate('/recs');
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsername = async () => {
    setDone(true);
    try {
      const test = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/userExists', { username });
      if (test.status === 200) {
        createUserSignup();
      } else {
        setDone(false);
        alert('Username Not Available');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = (data) => {
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
      navigate('/recs');
    } catch (err) {
      console.log(err);
    }
  };

  // const onSuccess = async (res) => {
  //   const decoded = jwtDecode(res.credential);
  //   try {
  //     const data = await axios.post('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/googleAuthID', decoded);
  //     if (data.status === 200) {
  //       createUser(decoded);
  //     } else if (data.status === 201) {
  //       loginUser(decoded);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const onFailure = (res) => {
    console.log('Login Failed, Res -> ', res);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    document.title = `Login - Studio`;
  }, []);

  return (
    <div className='signin-user'>
      <div className="input-signup">
        <div className='logo'>
          <a className="logo-main">A R T I Q U E '</a>
        </div>
        <p className='signin-title'> Log in to the world of art and creativity </p>
        {showUsername ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Username" className='username'
              {...register("username", { required: 'Username is Required' })} />
            {errors.username && <p className='red'>{errors.username.message}</p>}
            <input type="password" placeholder="Password" className='password'
              {...register("password", { required: 'Password is Required' })} />
            {errors.password && <p className='red'>{errors.password.message}</p>}
            <button type='submit' className='login-butt'>Login</button>
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
          </form>
        ) : (
          <div className="inputLoginArea inputLoginArea2">
            <label htmlFor="username">Username</label>
            <input value={username} onChange={handleChange} placeholder="Enter your username" className='username' />
            {done ? (
              <button className='submitUsername'>SUBMIT</button>
            ) : (
              <button className='submitUsername' onClick={handleUsername}>SUBMIT</button>
            )}
          </div>
        )}
        <div className='lower'>
          {/* <p>Not a User? <span className='underline' >SIGNUP HERE</span></p> */}
          <p>Already have an account? <a onClick={() => navigate('/signup')}>Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
