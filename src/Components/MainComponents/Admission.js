import React from "react";
import Header from "../Header";
import useLoading from "../Hooks/useLoading";
import HomeShimmer from "../Shimmer/HomeShimmer";
import Footer from "../Footer";

const Admission = () => {
  const isLoading = useLoading(true, 300);
  return (
    <>
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <div>
          <Header />
          <div className="flex justify-center items-center py-20">
            <div className=" p-2">
              <h1 className="text-3xl p-2 py-3 font-semibold border-b-4">
                Admission process
              </h1>
              <p className="p-2">
                • As per the guidelines given by the Government of Karnataka and
                Rajiv Gandhi University of Health Sciences from time to time.
              </p>
              <p className="p-2">
                • The Completed application form should be submitted along with
                the photo copies of the following :
              </p>
              <ul className="pl-4">
                <li>➡️ 10th / SSLC Marks certificate</li>
                <li>➡️ 10 + 2 / PUC Marks certificate </li>
                <li>➡️ Transfer certificate</li>
                <li>➡️ Migration certificate</li>
                <li>➡️ Aadhar card</li>
                <li>➡️ Caste & Income certificate</li>
                <li>
                  ➡️ Six recent passport-sized and six stamp-sized photographs
                </li>
              </ul>
              <h1 className="text-3xl mt-10 p-2 font-semibold border-b-4">
                Eligibility
              </h1>
              <p className="p-2">• Pass in PUC Science</p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Admission;
