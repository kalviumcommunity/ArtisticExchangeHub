import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileUpload() {
    const [profilePic, setProfilePic] = useState(null);
    const [base64Image, setBase64Image] = useState(null);
    const [hasImage, setHasImage] = useState(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setBase64Image(savedImage);
        } else {
            setHasImage(false);
        }
    }, []);

    const handleProfilePicChange = (e) => {
        convertToBase64(e.target.files[0]);
    };

    const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setBase64Image(reader.result);
            setHasImage(true);
        };
        reader.onerror = (err) => {
            console.log("Error: ", err);
        };
    };

    const handleUpload = async () => {
        const userID = localStorage.getItem('userID'); // Ensure you have a user ID stored

        if (!userID) {
            console.error("User ID not found in localStorage");
            return;
        }

        if (!base64Image) {
            console.error("No image selected");
            return;
        }

        try {
            const res = await axios.put(
                `http://localhost:3000/upload/${userID}`,
                { profile: base64Image }
            );
            console.log('Upload response:', res.data);

            // Store the Base64 image in local storage for future use
            localStorage.setItem('profileImage', base64Image);
            setHasImage(true);
        } catch (err) {
            console.error('Upload error:', err.response ? err.response.data : err.message);
        }
    };

    return (
        <div>
            <h2>Upload Profile Picture</h2>
            <div>
                <label>Profile Picture:</label>
                <button onClick={() => document.getElementById('profilePic').click()}>Choose File</button>
                <input type="file" name="profile_pic" id="profilePic" accept="image/*" onChange={handleProfilePicChange} />
            </div>
            {hasImage && (
                <div>
                    <h3>Preview:</h3>
                    <img src={base64Image} alt="Profile Preview" style={{ width: '200px', height: '200px' }} />
                </div>
            )}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default ProfileUpload;
