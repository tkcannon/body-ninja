import "./style.css";
import { useState } from "react";

function Carousel({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  setTimeout(() => {
    setActiveImage(activeImage + 1 >= images.length ? 0 : activeImage + 1);
  }, 7000);

  return (
    <div className="carousel-image-container">
      {images.length && (
        <img
          className="carousel-image"
          src={images[activeImage].path}
          alt={images[activeImage].label}
        />
      )}
    </div>
  );
}

export default Carousel;
