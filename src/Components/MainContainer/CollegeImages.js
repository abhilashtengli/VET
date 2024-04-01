import React from "react";
import ImageSlider from "../ImageSlider";
import { image } from "../../Utils/Constants";

const CollegeImages = () => {
  return (
    <div className="w-[60%] p-10">
      <div className=" border p-5 bg-gray-200 rounded-lg">
        <ImageSlider images={image} interval={2000} />
      </div>
    </div>
  );
};

export default CollegeImages;
