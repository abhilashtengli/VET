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
        <div className="w-1/3 mt-48  mr-20 border p-5 rounded-lg border-black">
          <Formik
            initialValues={{ userName: "", userEmail: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="h-96">
              <label htmlFor="userName" className=" font-semibold">
                Name
              </label>
              <Field
                type="text"
                name="userName"
                id="userName"
                className="w-full first-line:h-35 p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-red-500"
              />

              <label htmlFor="userEmail" className="mt-4 font-semibold py-2">
                Email
              </label>
              <Field
                type="email"
                name="userEmail"
                id="userEmail"
                className="w-full h-35 p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
              />
              <ErrorMessage
                name="userEmail"
                component="div"
                className="text-red-500"
              />

              <label htmlFor="message" className="mt-4 font-semibold">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="w-full p-1 outline-none rounded-md border border-gray-300 focus:border-teal-500"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />

              <button
                type="submit"
                className="mt-8 cursor-pointer w-full bg-orange-500 text-white border-none py-2 px-4"
              >
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
