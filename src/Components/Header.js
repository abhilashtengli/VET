import React from "react";
import logo from "../Components/Images/VET_logo.png";
const Header = () => {
  return (
    <>
      <div className="z-10 shadow-lg fixed w-screen bg-white	 flex justify-between items-center  py-2 ">
        <img
          className="w-20 rounded-full ml-20"
          alt="vet_logo"
          src={logo}
        ></img>
        <div className="flex mr-32">
          <ul className="flex  mr-20 hover:cursor-pointer">
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              Home
            </li>
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              Courses
            </li>
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              Facilities
            </li>
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              Faculties
            </li>
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              Gallery
            </li>
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              About Us
            </li>
            <li className="text-lg px-5 py-1 hover:bg-gray-300  font-semibold">
              Contact
            </li>
          </ul>
          <p className="border border-gray-400 text-lg py-1 rounded-lg px-3 font-semibold hover:bg-black hover:text-white hover:cursor-pointer">
            ADMISSION
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
