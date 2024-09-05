import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './home/Home'
import './App.css'
import Image from './home/oilpainting'
import Upload from './home/Uploadfile'
import Signup from './home/signup'
import ProfileScreen from './profile/Profilescreen';
import MakeYourProfile from './home/MakeYourProfile';
import Login from './home/login'
import Form from  './home/form';
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route path='/Update/:id' element={<Update />} /> */}
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/makeprofile" element={<MakeYourProfile />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/login" element={< Login />} />
          <Route path="/image" element={< Image />} />
          <Route path="/upload/:id" element={<Upload />} />
          
          <Route path="/form" element={<Form />} />

          

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
