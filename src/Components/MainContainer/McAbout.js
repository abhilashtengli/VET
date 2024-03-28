import React from "react";
import logo from "../Images/VET_logo.png";
const McAbout = () => {
  return (
    <>
      <div className=" bg-gray-200 p-5">
        <h1 className=" text-3xl  pl-36 py-2 ml-10 font-semibold">ABOUT US</h1>
        <div className=" flex justify-center items-center ">
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
            <button className=" border border-black font-semibold  mt-2 bg-white hover:bg-black hover:text-white px-3 py-1 rounded-lg">
              Know more
            </button>
          </div>
          <div>
            <img
              className=" w-96 rounded-lg shadow-black mx-5"
              alt=""
              src={logo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default McAbout;
