import React, { useState, useEffect } from "react";

import './style.css'
const ImageComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { imageUrl, styles , className} = props
  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.onload = () => setLoading(false);
      img.onerror = () => setError("Rasm yuklanmadi");
      img.src = imageUrl;
    };

    loadImage();
  }, [imageUrl]);

  if (loading) {
    return <div className="blur-lg">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <img  {...props} src={imageUrl} alt="img" className={styles + " " + className}  />;
};

export default ImageComponent;