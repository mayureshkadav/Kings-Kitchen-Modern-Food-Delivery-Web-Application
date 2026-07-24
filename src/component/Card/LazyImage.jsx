import React, { useState } from "react";
import "./Card.css";

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="imageWrapper">
      <div className={`imageSkeleton ${isLoaded ? "hidden" : "visible"}`} />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`productImage ${isLoaded ? "visible" : "hidden"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
