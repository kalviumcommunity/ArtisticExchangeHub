import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../home/Home.css';
import backgroundImage from '../img/background.png';
import logo from '../img/logo.png';
import '../home/nav.css';
import '../home/container2.css';
import '../home/container3.css';
import '../home/container4.css';
import category1 from '../img/D1.jpeg';
import category2 from '../img/D2.jpeg';
import category3 from '../img/D3.jpeg';
import category4 from '../img/D4.jpeg';
import category5 from '../img/D5.jpeg';
import category6 from '../img/D6.jpeg';
import profile1 from '../img/P1.jpeg';
import profile2 from '../img/P2.jpeg';
import profile3 from '../img/P3.jpeg';
import profile4 from '../img/P4.jpeg';
import popularart from '../img/container4.png';
import artistphoto from '../img/popularartist.png';

function Home() {
    const navigate = useNavigate(); // Use useNavigate for navigation

    return (
        <div>
            <div className="container1">
                <header>
                    <a href="#" className="logo">A R T I Q U E '</a>
                    <nav className="navbar">
                        <a className="active" href="#home">Home</a>
                        <a href="">Art</a>
                        <a href="">Search</a>
                        <a href="">Gallery</a>
                        <a href="">Review</a>
                        <a href="">Order</a>
                    </nav>
                    <div className="icons">
                        <i href="#" className="fa fa-sign-in" onClick={() => navigate('/signup')} id=""></i> {/* Use navigate for navigation */}
                        <i className="fa fa-user" id="search-icon"></i>
                        <i href="#" className="fa fa-shopping-cart"></i>
                    </div>
                </header>
                <div className="title">
                    <div className="invest">INVEST IN ART THAT SPEAKS TO YOU.</div>
                    <button className="title-button" onClick={() => navigate('/')}>
                        <p className="getstart">GET STARTED</p>
                    </button>
                </div>
            </div>
            <div className="main-container">
                <div className="container2">
                    <div className="section-select">Find The Art You Like</div>
                    <div className="category">
                        <div>
                            <img className="C1" src={category1} alt="" />
                            <p className="C-name">Oil</p>
                        </div>
                        <div>
                            <img className="C2" src={category2} alt="" />
                            <p className="C-name">Abstract </p>
                        </div>
                        <div>
                            <img className="C3" src={category3} alt="" />
                            <p className="C-name">Portrait</p>
                        </div>
                        <div>
                            <img className="C4" src={category4} alt="" />
                            <p className="C-name"> Landscape</p>
                        </div>
                        <div>
                            <img className="C5" src={category5} alt="" />
                            <p className="C-name">Real-life </p>

                        </div>
                        <div>
                            <img className="C6" src={category6} alt="" />
                            <p className="C-name">Thread</p>
                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="section-select">Artist Profile</div>
                    <div className="card-list">
                        <a href="#" className="card-item">
                            <img src={profile1} alt="Card Image" />
                            <span className="artist">Oil painter</span>
                            <h3>Every artist was first an amateur. </h3>
                            <div className="arrow">
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                            <button className="view">View</button>
                        </a>
                        <a href="#" className="card-item">
                            <img src={profile2} alt="Card Image" />
                            <span className="artist">Abstract artist</span>
                            <h3>Every artist was first an amateur. </h3>
                            <div className="arrow">
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                            <button className="view">View</button>
                        </a>
                        <a href="#" className="card-item">
                            <img src={profile3} alt="Card Image" />
                            <span className="artist">Portrait artist</span>
                            <h3>Every artist was first an amateur. </h3>
                            <div className="arrow">
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                            <button className="view">View</button>
                        </a>
                        <a href="#" className="card-item">
                            <img src={profile4} alt="Card Image" />
                            <span className="artist">Landscape artist</span>
                            <h3>Every artist was first an amateur. </h3>
                            <div className="arrow">
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                            <button className="view">View</button>
                        </a>
                    </div>
                </div>
                <div className="container4">
                    <div>
                        <img className="popular" src={popularart} alt="" />
                    </div>
                    <div className="details">
                        <div >
                            <p className="featured">FEATURED ARTISTS</p>
                        </div>
                        <div>
                            <img className="artistP" src={artistphoto} alt="" />
                        </div>
                        <div className="all-info">
                            <p className="name-C" ><b>creator:</b> Christine Flynn </p>
                            <p className="descp">From the depths of shadow, a silver vessel erupts in a kaleidoscope of colorful blossoms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
