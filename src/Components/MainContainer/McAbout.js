import React from "react";
import logo from "../../Images/VET_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const McAbout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToAboutPage = () => {
    navigate("/aboutus");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const showButton = location.pathname !== "/aboutus";

  return (
    <>
      <div className=" bg-gray-200 p-5  py-20">
        <h1 className=" text-3xl  pl-32 ml-4 w-2/5 py-2 font-semibold">
          ABOUT US
        </h1>
        <div className=" flex justify-evenly items-center ">
          <div className=" w-2/4 p-5 mx-5">
            <p className=" py-2">
              Veerbhadreshwar College of Pharmacy is managed by Veerbhadreshwar
              Education Trust. The Trust is established in the year 2017 to
              provide quality education in the field of health sciences. With an
              aim to promote quality education on pharmaceutical sciences and to
              fulfil the health care needs of the society, Veerbhadreshwar
              Education Trust started the Veerbhadreshwar College of Pharmacy in
              the year 2019.
            </p>
            <p className="py-2">
              Pharmacy profession is a creative and challenging career. By
              choosing pharmacy as career, you can make all endeavours to create
              a healthy society. Numerous job opportunities are available in
              Community Pharmacy, Hospital Pharmacy, Clinical Services,
              Pharmaceutical Marketing, Research & Development, Pharmaceutical
              Industry, Pharmaceutical - Regulatory Affairs, Pharmacoinformatics
              and Academics.
            </p>
            {showButton && (
              <button
                onClick={navigateToAboutPage}
                className="mt-2 border border-black hover:border-none font-semibold bg-white hover:bg-yellow-500 hover:text-white px-3 py-1 rounded-lg"
              >
                Know more
              </button>
            )}
          </div>
          <div className="-mt-16">
            <img className="w-96 rounded-lg shadow-black " alt="" src={logo} />
            {/* <ImageSlider images={images} interval={2000}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default McAbout;
