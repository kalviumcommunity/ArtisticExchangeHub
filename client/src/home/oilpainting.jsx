// ImageComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/images');   
        setImages(response.data);
        console.log(response.data);  
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images && images.map(image => (
        <img key={image._id} src={image.img} alt="Christmas Roses" />
      ))}
    </div>
  );
};

export default ImageComponent;
