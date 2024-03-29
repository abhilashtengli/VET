import React from "react";
import LandingPage from "./LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Courses from "./Courses";
import Facilities from "./Facilities";
import Faculties from "./Faculties";
import Gallery from "./Gallery";
import Admission from "./Admission";
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
