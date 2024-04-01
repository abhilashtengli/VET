import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageScroller from "./ImageScroller";
import useLoading from "./Hooks/useLoading";
import HomeShimmer from "./Shimmer/HomeShimmer";
import McCourse from "./MainContainer/McCourse";

const Faculties = () => {
  const isLoading = useLoading(true,300);
  return (
    <>
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <div>
          <Header />
          <ImageScroller />
          <McCourse />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Faculties;
