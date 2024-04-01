import React from "react";
import LandingPage from "./ChildComponent/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/MainComponents/AboutUs";
import Contact from "../Components/MainComponents/Contact";
import Courses from "../Components/MainComponents/Courses";
import Facilities from "../Components/MainComponents/Facilities";
import Faculties from "../Components/MainComponents/Faculties";
import Gallery from "../Components/MainComponents/Gallery";
import Admission from "../Components/MainComponents/Admission";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/facilities",
      element: <Facilities />,
    },
    {
      path: "faculties",
      element: <Faculties />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/admission",
      element: <Admission />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
