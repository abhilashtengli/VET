import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" p-10 flex justify-between bg-gray-200">
        <div className="w-[25%]">
          <h2 className="font-bold text-2xl">About Us</h2>
          <p className="mt-2 ">
            Veerbhadreshwar College Of Pharmacy is managed by Veerbhadreshwar
            Education Trust. The Trust was established in the year 2017 to
            provide quality education in the field of health sciences.
          </p>
        </div>
        <div className="w-[12%]">
          <h2 className="font-bold ml-7 text-2xl">Quick Links</h2>
          <ul className="mt-2 ml-8">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">About Us</li>
            <li className=" cursor-pointer">Courses</li>
            <li className=" cursor-pointer">Admission</li>
            <li className=" cursor-pointer">News & Events</li>
            <li className=" cursor-pointer">Facilities</li>
            <li className=" cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold ml-7 text-2xl">Institute Hours</h2>
          <p className="mt-2 ml-10 ">Monday To Friday</p>
          <p className="ml-10 ">09.00 AM - 5.00 PM</p>
          <p className="mt-4 ml-10 ">Saturday & Sunday</p>
          <p className=" ml-10 ">No Admission/Enquiry</p>
        </div>
        <div className="">
          <div className="">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHome} />
              <h1 className="font-bold text-lg px-2"> Address</h1>
            </div>
            <p className="w-60  mt-2">
              M.G Road, Behind KEB Office, Gulbarga, KA 585103, INDIA{" "}
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
              <h1 className="font-bold text-lg px-2"> Phone</h1>
            </div>
            <p className="w-60  mt-1">9916334758</p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <h1 className="font-bold text-lg px-2"> Email</h1>
            </div>
            <p className="w-60  mt-1">chairmanvetklbg@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-black flex justify-evenly items-center">
        <h1 className=" text-white">
          2019 © Veerbhadreshwar Pharmacy College All Right Reserved.
        </h1>
        <div className="text-white flex items-center ">
          <p className="text-xl">
            Social :
          </p>
          <ul className="flex  ml-5 text-2xl">
            <li className="p-2 hover:bg-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="p-2 hover:bg-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li className="p-2 hover:bg-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faXTwitter} />
            </li>
            <li className="p-2 hover:bg-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faGoogle} />
            </li>
          </ul>
        </div>{" "}
        */
      </div>
    </>
  );
};

export default Footer;
