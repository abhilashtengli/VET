import React from "react";
import ImageSlider from "../ImageSlide";
import { images } from "../../Utils/Constants";

const CollegeImages = () => {
  return (
    <div className=" border-red-400 p-10 mr-10">
      <div className=" border border- p-5 bg-gray-200 rounded-lg">
        <ImageSlider images={images} interval={2000} />
      </div>
    </div>
  );
};

export default CollegeImages;
