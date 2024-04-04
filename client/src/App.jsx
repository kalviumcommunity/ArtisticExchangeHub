import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './home/Home'
import './App.css'
// import Login from './home/login'
import Signup from './home/signup'
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route path="/l" element={<Login />} /> */}
          {/* <Route path='/Update/:id' element={<Update />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={< Signup />} />



        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
