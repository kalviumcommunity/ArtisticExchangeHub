import React, { useState } from 'react';
import './MakeYourProfile.css';
const ProfilePictureUpload = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setShowSnackbar(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="profile-pic-wrapper">
      <h1 className="h1">Hover over and click the image to select.</h1>
      <div className="pic-holder" onClick={() => document.getElementById('newProfilePhoto').click()}>
        <img id="profilePic" className="pic" src={selectedImage}   />
        <input className="uploadProfileInput" type="file" name="profile_pic" id="newProfilePhoto" accept="image/*" onChange={handleImageChange} />
        <label htmlFor="newProfilePhoto" className="upload-file-block">
          <div className="text-center">
            <div className="mb-2">
              <i className="fa fa-camera fa-2x"></i>
            </div>
            <div className="text-uppercase">
              Update <br /> Profile Photo
            </div>
          </div>
        </label>
      </div>
      <hr />
      <p className="text-info text-center small">Note: Selected image will not be uploaded anywhere.<br /> It's just for demonstration purposes.</p>
      {showSnackbar && (
        <div className="snackbar show" role="alert" onClick={handleSnackbarClose}>
          <i className="fa fa-check-circle text-success"></i> Profile image updated successfully
        </div>
      )}
    </div>
  );
};

export default ProfilePictureUpload;
