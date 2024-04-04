import React from "react";
import McCourse from "../MainContainer/McCourse";
import Header from "../Header";
import McAbout from "../MainContainer/McAbout";
import Footer from "../Footer";
import useLoading from "../Hooks/useLoading";
import HomeShimmer from "../Shimmer/HomeShimmer";
import ScrollToTopButton from "../ScrollToTopButton";

const AboutUs = () => {
  const isLoading = useLoading(true, 300);

  return (
    <>
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <div>
          <Header />
          <McAbout />
          <McCourse />
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </>
  );
};

export default AboutUs;
