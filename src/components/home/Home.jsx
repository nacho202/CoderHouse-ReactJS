import React, { useState } from "react";
import "./Landing.css";

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlideIndex = (prevSlide + 1) % 3; // Cambiar el 3 por la cantidad de imágenes en el slide
      return nextSlideIndex;
    });
  };

  return (
    <div className="landing">
      {/* Sección de imágenes de productos con slider */}
      <div className="product-images">
        <img
          src={`/Slide Zapastop ${currentSlide + 1}.png`}
          alt={`Producto ${currentSlide + 1}`}
          style={{ width: "100%" }}
        />
        <button className="slide-button" onClick={nextSlide}>
          <img
            src="/arrow-right-square-fill.svg"
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Landing;
