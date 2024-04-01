import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import useLoading from "../Hooks/useLoading";
import HomeShimmer from "../Shimmer/HomeShimmer";
import PhotoGallery from "../../Images/ph_students.jpg";
// import img from "../Images/ph_students.jpg";
const Gallery = () => {
  const isLoading = useLoading(true, 300);
  return (
    <>
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <div>
          <Header />
          {/* <PhotoGallery input={""} images={img} /> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Gallery;
