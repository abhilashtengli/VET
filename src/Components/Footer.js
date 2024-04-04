import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../Utils/Constants";
import { faIcon } from "../Utils/Constants";
import { InstTiming } from "../Utils/Constants";
const Footer = () => {
  return (
    <>
      <div className="p-2 md:p-10 md:flex justify-between md:bg-gray-200 border">
        <div className="md:w-[25%] w-full  mt-2 md:mt-0 border-gray-500 bg-gray-200 md:border-none p-5 md:p-0">
          <h2 className="font-bold text-2xl">About Us</h2>
          <p className="mt-2 ">
            Veerbhadreshwar College Of Pharmacy is managed by Veerbhadreshwar
            Education Trust. The Trust was established in the year 2017 to
            provide quality education in the field of health sciences.
          </p>
        </div>
        <div className="md:w-[12%] mt-5 md:mt-0  border-gray-500 bg-gray-200 md:border-none p-5 md:p-0">
          <h2 className="font-bold md:ml-7 text-2xl">Quick Links</h2>
          <ul className="mt-2 md:ml-8">
            {navItems.map((item, index) => (
              <li className=" cursor-pointer">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" border-gray-500 bg-gray-200 md:border-none mt-5 md:mt-0 p-5 md:p-0">
          <h2 className="font-bold text-2xl">Institute Hours</h2>
          {InstTiming.map((inst, index) => (
            <p className="">{inst}</p>
          ))}
        </div>
        <div className=" border-gray-500 mb-2 md:mb-0 bg-gray-200 md:border-none mt-5 md:mt-0 p-5 md:p-0">
          <div className="">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHome} />
              <h1 className="font-bold text-lg px-2"> Address</h1>
            </div>
            <p className="md:w-60 mt-2">
              M.G Road, Behind KEB Office, Gulbarga, KA 585103, INDIA{" "}
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
              <h1 className="font-bold text-lg px-2"> Phone</h1>
            </div>
            <p className="w-60  mt-1">9916334758, 9742847301</p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <h1 className="font-bold text-lg px-2"> Email</h1>
            </div>
            <p className="md:w-60 text-sm md:text-base mt-1">
              chairmanvetklbg@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black  md:flex items-center">
        <h1 className=" text-white  md:w-1/2 text-center md:text-base w-full">
          2019 © Veerbhadreshwar Pharmacy College All Rights Reserved.
        </h1>
        <div className="text-white md:w-1/2 flex items-center justify-center">
          <p className="text-xl">Social :</p>
          <ul className="flex  ml-5 text-2xl">
            {faIcon.map((faicon) => (
              <li className="p-2 cursor-pointer">
                <Link to="/">
                  <FontAwesomeIcon icon={faicon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
