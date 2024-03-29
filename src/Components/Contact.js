import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3).required("Name is required"),
    userEmail: Yup.string()
      .email("Invalid email")
      .matches(/\.(com|in)$/, "Email must contain '.com' or '.in'")
      .required("Email is required"),
    message: Yup.string().min(10).required("Message is required"),
  });
  

  const handleSubmit = (values, { resetForm }) => {
    alert("messeagesend");
    resetForm();
  };
  return (
    <div>
      <Header />
      <div className="flex justify-end  items-center mb-20 border border-red-600">
        <div className="w-1/3 mt-32  mr-20 border p-5 rounded-lg border-black">
          <form className="h-2/3">
            <label className="mt-4 font-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full first-line:h-35 p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
            />
            <label className="mt-4 font-semibold py-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full h-35 p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
            />
            <label className="mt-4 font-semibold">Message</label>
            <textarea
              name="message"
              className="w-full p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="mt-8 cursor-pointer w-full bg-orange-500 text-white border-none py-2 px-4"
            />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
