import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import '../home/Home.css';
import backgroundImage from '../img/background.png';
import logo from '../img/logo.png';
import '../home/nav.css';
import backgroundVideo from "../home/V4.mp4";
import '../home/container2.css';
import '../home/container3.css';
import '../home/container4.css';
import '../home/container5.css';
import '../home/container6.css';
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
import axios from 'axios';

function Home() {
    const navigate = useNavigate();
    const artRef = useRef(null);
    const galleryRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cards, setCards] = useState([]); // State to store artist cards

    useEffect(() => {
        const id = localStorage.getItem("userID");
        if (id) {
            console.log("ID IS", id);
        }
        setIsLoggedIn(true);
        console.log("isLoggedIn", isLoggedIn);

        // Fetch artist cards data
        const fetchCards = async () => {
            try {
                const response = await axios.get("https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/info");
                setCards(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCards();
    }, []);

    const goToMakeYourProfile = () => {
        navigate("/makeprofile");
    };

    const scrollToArt = () => {
        artRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToGallery = () => {
        galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleLogout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("userID");
        setIsLoggedIn(false);
        navigate('/signup');
    };

    return (
        <div>
            <div className="container1">
                <video autoPlay muted loop id="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    {/* Your browser does not support the video tag. */}
                </video>
                <header >
                    <a href="#" className="logo">A R T I Q U E '</a>
                    <nav className="navbar">
                        <a className="active" href="#home">Home</a>
                        <a href="#" onClick={scrollToArt}>Art</a>
                        <a href="#">Search</a>
                        <a href="#" onClick={scrollToGallery}>Gallery </a>
                        <a href="#">Review</a>
                        <a href="#">Order</a>
                    </nav>
                    <div className="icons">{" "}
                        <div className="icons">
                            {isLoggedIn ? (
                                <div>

                                    <button className="auth-button" onClick={handleLogout}>Logout</button>
                                    <button className="profile-button" onClick={() => navigate('/form')}>Profile</button>
                                </div>

                            ) : (
                                <>
                                    <button className="signup-button" onClick={() => navigate('/signup')}>Signup</button>
                                    <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                                </>
                            )}
                        </div>

                    </div>
                </header>
                <div className="title">
                    <div className="invest">INVEST IN ART THAT SPEAKS TO YOU.</div>
                    <button className="title-button">GET STARTED
                    </button>
                </div>
            </div>
            <div className="main-container">
                <div className="container2" ref={artRef}>
                    <div className="section-select">Find The Art You Like</div>
                    <div className="category">
                        <div>
                            <Link to="/image">
                                <img className="C1" src={category1} alt="" />
                                <p className="C-name">Oil</p>
                            </Link>
                        </div>
                        <div>
                            <img className="C2" src={category2} alt="" />
                            <p className="C-name">Abstract</p>
                        </div>
                        <div>
                            <img className="C3" src={category3} alt="" />
                            <p className="C-name">Portrait</p>
                        </div>
                        <div>
                            <img className="C4" src={category4} alt="" />
                            <p className="C-name">Landscape</p>
                        </div>
                        <div>
                            <img className="C5" src={category5} alt="" />
                            <p className="C-name">Real-life</p>
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
                        <div>
                            <p className="featured">FEATURED ARTISTS</p>
                        </div>
                        <div>
                            <img className="artistP" src={artistphoto} alt="" />
                        </div>
                        <div className="all-info">
                            <p className="name-C"><b>creator:</b> Christine Flynn</p>
                            <p className="descp">From the depths of shadow, a silver vessel erupts in a kaleidoscope of colorful blossoms.</p>
                        </div>
                    </div>
                </div>
                <div className="container5" ref={galleryRef}>
                    <div className="nameart">
                        <div className="nameartgallery">
                            <p>Art <br />Gallery</p>
                        </div>
                        <div className="logonamep">
                            <p>A R T I Q U E '</p>
                        </div>
                    </div>
                    <div className="artgallery">
                        <img src={category1} alt="category1" className="card" />
                        <img src={category1} alt="category1" className="card" />
                        <img src={category1} alt="category1" className="card" />
                        <img src={category1} alt="category1" className="card" />
                        <img src={category1} alt="category1" className="card" />
                        <img src={category1} alt="category1" className="card" />
                    </div>
                </div>
                <div className="container6">
                    <div className="section-select">Artist Profile</div>
                    <div className="cards-list">
                        {cards.map((card, index) => (
                            <div className="card-item" key={index}>
                                <div className="card-info">
                                    <p>Name: {card.name}</p>
                                    <p>Email: {card.email}</p>
                                </div>
                                <div className="card-action">
                                    <Link to={`/profile/${card._id}`}>
                                        <button className="profile-btn">View Profile</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
