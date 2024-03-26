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

      {/* Sección de historia y explicación de la marca */}
      <div className="brand-description">
        <h2>Nuestra Historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis,
          eros vitae mollis tincidunt, ipsum arcu viverra mauris, at consectetur
          sapien orci nec sem.
        </p>
        <p>
          Suspendisse tincidunt ligula a arcu congue, vitae dictum justo
          convallis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>

      {/* Sección de productos destacados */}
      <h2 className="destacados-header">Productos Destacados</h2>
      <div className="featured-products">
      
        <div className="product">
          <img src="/ZAPASTOP1.png" alt="Producto Destacado 1" />
          <p className="price">$99.99</p>
        </div>
        <div className="product">
          <img src="/ZAPASTOP 2.png" alt="Producto Destacado 2" />
          <p className="price">$79.99</p>
        </div>
        <div className="product">
          <img src="/ZAPASTOP 3.png" alt="Producto Destacado 3" />
          <p className="price">$129.99</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
