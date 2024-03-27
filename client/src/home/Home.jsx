import React from "react";
import '../home/Home.css'
import backgroundImage from '../img/background.png'
import logo from '../img/logo.png'

function Home   () {
    return (
      <div className="container">
        {/* <img src={backgroundImage} alt="Background" className="background-image" /> */}
        <div className="nav-bar">
            <div className="logo">
                <img src={logo} alt="logo"className="logo-nav" />
                {/* <p className="logo">ARTIQUE'</p> */}

            </div>
            <div >
                <input className="search-bar" type="text" placeholder="Find your Art." />

            </div>
            <div className="ownprofile">
                
            </div>
            <div className="login">
                <button>login</button>

            </div>
            <div className="signup">
                <button>signup</button>

            </div>

        </div>
        <div className="title">


            <div className="invest">INVEST IN ART THAT SPEAKS TO YOU.</div>

             
            <button className="title-button">
                <p className="getstart">GET STARTED</p>
            </button>

        </div>

        

         
         
      </div>
    );
  }
  
  export default Home   ;