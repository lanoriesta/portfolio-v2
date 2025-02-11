import headShot from "../assets/images/headshot-lawrence.png";

const MainKeyVisual = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[150px]">
      <div className="pb-5">
        <img
          src={headShot}
          alt="Lawrence Angelo Noriesta"
          className="size-30 shrink-0 rounded-full contrast-[.9] brightness-100 shadow-lg"
        />
      </div>
      <h1>Hi, I’m Lawrence</h1>
      <h3>Frontend Developer & Web Designer</h3>
    </div>
  );
};

export default MainKeyVisual;
