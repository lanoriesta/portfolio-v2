import React from "react";
import headShot from "../assets/images/headshot-lawrence.png";

const MainKeyVisual = () => {
  return (
    <div className="flex flex-col justify-center items-center h-1/2">
      <img
        src={headShot}
        alt="Lawrence Angelo Noriesta"
        className="size-30 shrink-0 rounded-full contrast-[.9] brightness-100"
      />
      <h1>Lawrence Angelo Noriesta</h1>
      <h3>Frontend Developer & Web Designer</h3>
    </div>
  );
};

export default MainKeyVisual;
