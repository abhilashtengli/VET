import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import Footer from "./Footer";
import { faIcon } from "../Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Address from "./Address";
import useLoading from "./Hooks/useLoading";
import useValidationSchema from "./Hooks/useValidationSchema";

const Contact = () => {
  const validationSchema = useValidationSchema();

  const handleSubmit = (values, { resetForm }) => {
    alert("messeagesend");
    resetForm();
  };
  return (
    <div>
      <Header />
      <div className="flex w-full py-5 justify-center">
        <Address />
      </div>
      <div className=""></div>
      <div className=" p-5 flex justify-evenly ">
        <div className=" bg-gray-200 rounded-lg p-5">
          <div className="border bg-white my-5 rounded-lg p-2">
            <h1 className="text-2xl">Contact Details</h1>
            <p className="text-gray-600">
              M.G Road, Behind KEB office, Gulbarga, 585103
            </p>
          </div>
          <div className="border bg-white my-5 rounded-lg p-2">
            <h1 className="text-2xl">Get in touch</h1>
            <p className="text-gray-600">
              <span className="font-semibold mr-2">Office :</span> 08472 -
              234758
            </p>
            <p className="text-gray-600">
              <span className="font-semibold mr-2">Fax : </span>123-323-3343
            </p>
            <p className="text-gray-600">
              <span className="font-semibold mr-2">
                Phone : 9916334758, 9742847301
              </span>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold mr-2">Email :</span>
              chairmanvetklbg@gmail.com
            </p>
          </div>
          <div className="border bg-white my-5 rounded-lg p-2">
            <h1 className="text-2xl">Follow Us</h1>
            <ul className="flex text-1xl -ml-2">
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
        <Formik
          initialValues={{ userName: "", userEmail: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form className="border bg-gray-200  py-10 w-96 p-5 rounded-lg">
            <label htmlFor="userName" className="mb-5 ml-2 font-semibold">
              Name
            </label>
            <Field
              type="text"
              name="userName"
              id="userName"
              className="w-full my-1 first-line:h-35 p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="text-red-500 py-2"
            />

            <label htmlFor="userEmail" className="mt-4 ml-2 font-semibold py-2">
              Email
            </label>
            <Field
              type="email"
              name="userEmail"
              id="userEmail"
              className="w-full my-1  p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
            />
            <ErrorMessage
              name="userEmail"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="message" className="mt-4 ml-2 font-semibold">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              id="message"
              className="w-full p-1 mt-2 outline-none rounded-md border border-gray-300 focus:border-teal-500"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />

            <button
              type="submit"
              className="mt-8 cursor-pointer rounded-lg w-full bg-orange-500 text-white border-none py-2 px-4"
            >
              Send
            </button>
          </form>
        </Formik>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
