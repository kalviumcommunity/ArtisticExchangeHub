import React from 'react';
import '../profile/profilescreen.css';


function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="content">
        <div className="content__cover">
          <div className="content__avatar"></div>
          <div className="content__bull">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="content__actions">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              {/* Path 1 */}
            </svg>
            <span>Connect</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {/* Path 2 */}
            </svg>
            <span>Message</span>
          </a>
        </div>
        <div className="content__title">
          <h1>Samantha Jones</h1>
          <span>New York, United States</span>
        </div>
        <div className="content__description">
          <p>Web Producer - Web Specialist</p>
          <p>Columbia University - New York</p>
        </div>
        <ul className="content__list">
          <li><span>65</span>Friends</li>
          <li><span>43</span>Photos</li>
          <li><span>21</span>Comments</li>
        </ul>
        <div className="content__button">
          <a className="button" href="#">
            <div className="button__border"></div>
            <div className="button__bg"></div>
            <p className="button__text">Show more</p>
          </a>
        </div>
      </div>
      <div className="bg">
        <div>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div className="theme-switcher-wrapper" id="theme-switcher-wrapper">
        <span>Themes color</span>
        <ul>
          <li><em className="is-active" data-theme="orange"></em></li>
          <li><em data-theme="green"></em></li>
          <li><em data-theme="purple"></em></li>
          <li><em data-theme="blue"></em></li>
        </ul>
      </div>
      
    </div>
  );
}

export default ProfilePage;

