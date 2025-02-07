import React from "react";
import emailIcon from "../assets/icons/mail-50.png";
import linkedinIcon from "../assets/icons/linkedin-50.png";

const Header = () => {
  return (
    <div className=" w-[450px] md:w-[750px] lg:w-[980px] flex flex-row justify-between items-center text-[#f1eccc]  p-4 mx-auto">
      <a
        href="mailto:law.noriesta@gmail.com"
        className="flex flex-row justify-center items-center space-x-2"
      >
        <img src={emailIcon} alt="email icon" srcset="" className="size-8" />{" "}
        <p className=" tracking-widest hidden sm:block">
          law.noriesta@gmail.com
        </p>
      </a>
      <a
        href="https://www.linkedin.com/in/l-a-noriesta"
        className="flex flex-row justify-center items-center space-x-2"
      >
        <img src={linkedinIcon} alt="email icon" srcset="" className="size-8" />
        <p className=" tracking-widest hidden sm:block">la.noriesta</p>
      </a>
    </div>
  );
};

export default Header;
