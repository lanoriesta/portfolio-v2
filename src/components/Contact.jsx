import React from "react";
import CV from "../assets/files/Lawrence Noriesta CV2.pdf";

const Contact = () => {
  return (
    <div className="w-[450px] md:w-[750px] lg:w-[980px] mx-auto py-10 text-center">
      <h2>Get in touch</h2>
      <div className="flex justify-center items-center gap-4 pt-5">
        <a
          className="w-[100px] bg-[#f1eccc] hover:underline px-6 py-4 shadow-lg"
          href="mailto:law.noriesta@gmail.com"
        >
          Email
        </a>
        <a
          className="w-[100px] bg-[#494949] text-white hover:underline px-6 py-4 shadow-lg"
          href={CV}
          target="_blank"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Contact;
