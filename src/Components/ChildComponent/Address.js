import React from "react";

const Address = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.631315832581!2d76.84841577493341!3d17.333328883544663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7aea9bb623f%3A0xe3727f550f08ee1e!2sVEERBHADRESWAR%20COLLEGE%20OF%20PHARMACY!5e0!3m2!1sen!2sin!4v1711707169559!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        title="googleMap"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl  border-yellow-300 border-8"
      ></iframe>
    </div>
  );
};

export default Address;
