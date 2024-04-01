import React from "react";
import Header from "./Header";
import McCourse from "./MainContainer/McCourse";
import Footer from "./Footer";
import useLoading from "./Hooks/useLoading";
import HomeShimmer from "./Shimmer/HomeShimmer";

const Courses = () => {
  const isLoading = useLoading(true, 300);
  return (
    <>
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <div className="">
          <Header />
          <div className="">
            <McCourse />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Courses;
