import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// npm install react-slick slick-carousel

const ImageScroller = ({ images }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const slider = document.querySelector(".slick-slider");
    if (slider) {
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust this value for slide transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
    cssEase: "linear", // Set cssEase to linear for smooth continuous scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center py-5">Faculties</h1>
        <div className="mb-16 mt-8">
          <Slider {...settings} className={isHovering ? "paused" : ""}>
            {images.map((image, index) => (
              <div className="px-5 py-2 h-72  border-black" key={index}>
                <div className="p-2 rounded-lg bg-gray-200 hover:scale-110 duration-500">
                  <img
                    className="cursor-pointer w-96 "
                    src={image.img}
                    alt={`Faculty ${index + 1}`}
                  />
                  <h1 className="text-center font-semibold">{image?.name}</h1>
                  <h1 className="text-center">{image?.dept}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
