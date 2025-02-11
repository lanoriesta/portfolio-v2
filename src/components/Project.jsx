import React from "react";
import projects from "../projects.js";

const Project = () => {
  return (
    <div className="w-[450px] md:w-[750px] lg:w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2  gap-2 py-15 lg:py-30">
      {projects.map((project) => (
        <div key={project.id}>
          {/* <h3 className=" text-amber-100">{project.name}</h3> */}
          <a href={project.img_link} target="_blank" rel="noreferrer">
            <img
              className="hover:scale-105 hover:shadow-none transition duration-300 ease-in-out shadow-lg shadow-black/30"
              src={project.image}
              alt={project.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
