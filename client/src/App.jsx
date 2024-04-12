import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './home/Home'
import './App.css'
import Login from './profile/Profilescreen'
import Upload from './home/Uploadfile'
import Signup from './home/signup'
import ProfileScreen from './profile/Profilescreen';
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route path='/Update/:id' element={<Update />} /> */}
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/signup" element={< Signup />} />

          <Route path="/upload/:id" element={<Upload />} />


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
