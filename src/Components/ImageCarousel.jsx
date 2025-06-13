import React from "react";
import Slider from "react-slick";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
