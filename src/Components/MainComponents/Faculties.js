import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ImageScroller from "../ChildComponent/ImageScroller";
import useLoading from "../Hooks/useLoading";
import HomeShimmer from "../Shimmer/HomeShimmer";
import McCourse from "../MainContainer/McCourse";
import { images } from "../../Utils/Constants";
import ScrollToTopButton from "../ScrollToTopButton";

const Faculties = () => {
  const isLoading = useLoading(true, 300);
  return (
    <>
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <div>
          <Header />
          <ImageScroller images={images} />
          <McCourse />
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </>
  );
};

export default Faculties;
