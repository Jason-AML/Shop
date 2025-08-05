import "../components/Carousel.css";

import auto1 from "../assets/auto1.jpg";
export const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={auto1}
            className="d-block w-100 img-carousel"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={auto1}
            className="d-block w-100 img-carousel"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={auto1}
            className="d-block w-100 img-carousel"
            alt="Slide 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
