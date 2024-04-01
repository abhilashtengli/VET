import React from "react";
import Accordion from "../Accordians/Accordian";
const McFaq = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold py-2 pt-10 bg-gray-100">
        FAQ's
      </h1>
      <div className="w-full flex justify-center bg-gray-100 py-5 ">
        <div className="p-4 rounded-lg w-2/3">
          <Accordion
            title="What is Pharmacy Practise?"
            answer="The application of unique knowledge and skills of the pharmacist to improve the health of the people is called Pharmacy Practice. It includes hospital, clinical, and community pharmacy."
          />
          <Accordion
            title="What is the role of practising pharmacist?"
            answer="A practicing pharmacist shares responsibilities with other healthcare professionals (doctors, nurses etc) and with patients for the outcome of therapy. The patient and the community are the primary beneficiaries of the pharmacist's actions."
          />
          <Accordion
            title="What Courses are being offered by the College?"
            answer="College offers D. Pharma which is having two years duration"
          />
          <Accordion
            title="What are the eligibility criteria for taking admission in above course"
            answer="Candidates should passed 10 +2 at the time of admission."
          />
          <Accordion
            title="Is there any age limit for taking admission in this course?"
            answer="No, there is no age limit for taking admission in these course."
          />
        </div>
      </div>
    </>
  );
};

export default McFaq;
