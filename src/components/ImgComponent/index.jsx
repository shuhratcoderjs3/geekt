import React, { useState, useEffect } from "react";

const ImageComponent = ({ imageUrl, styles }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return <img src={imageUrl} alt="img" className={styles} />;
};

export default ImageComponent;