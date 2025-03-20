import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#121212] text-[#494949] p-8 py-10">
      <div className="w-full md:w-[750px] lg:w-[980px] mx-auto grid grid-cols-1 gap-x-5">
        <div className="text-center">
          <h2>About</h2>
          <p className="text-[1rem]/6">
            I‘m a web designer with over three years of experience creating
            visually appealing and user-friendly websites. I enjoy working on
            design and user experience to bring ideas to life and ensure they
            look great on any device. Recently, I’ve added frontend development
            to my skill set, gaining months of hands-on experience with
            <span className="italic text-[#f1eccc]/60">
              {" "}
              HTML, CSS, JavaScript, and React
            </span>
            . I’m excited about combining design and code to create a smooth and
            engaging user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
