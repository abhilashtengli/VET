import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import Shimmer from "./Shimmer";

const LandinPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          <Header />
          <MainContainer />
        </>
      )}
    </div>
  );
};

export default LandinPage;
