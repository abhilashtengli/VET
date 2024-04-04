import React from "react";

const PhotoGallery = ({ input, images }) => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl text-center font-semibold py-5">FACILITIES</h1>
        <div className="w-full flex flex-wrap justify-center mb-5">
          {input.map((f) => (
            <div className="border rounded-lg md:w-fit bg-gray-200 m-2 text-black">
              <img className="w-60 md:w-96 m-2" alt="student_pc" src={images} />
              {f ? <h2 className="text-center py-1 font-semibold">{f}</h2> : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
