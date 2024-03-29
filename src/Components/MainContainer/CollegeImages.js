import React from "react";
import ImageSlider from "../ImageSlider";
import { image } from "../../Utils/Constants";

const CollegeImages = () => {
  return (
    <div className=" border-red-400 p-10 mr-10">
      <div className=" border border- p-5 mt-10 bg-gray-200 rounded-lg">
        <ImageSlider images={image} interval={2000} />
      </div>
    </div>
  );
};

export default CollegeImages;
