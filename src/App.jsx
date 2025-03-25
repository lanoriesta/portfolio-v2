import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/header";
// import MainKeyVisual from "./components/MainKeyVisual";
import MainKeyVisualSection from "./components/MainKeyVisualSection";
import Project from "./components/Project";

function App() {
  return (
    <div className=" min-h-full">
      <Header />
      {/* <MainKeyVisual /> */}
      <MainKeyVisualSection />
      <Experience />
      <Project />
      <div className=" w-[450px] md:w-[750px] lg:w-[980px] mx-auto">
        <hr className="h-[2px] bg-[#f1eccc]/30 " />
      </div>
      <Contact />
      <p className="text-center text-xs pt-10 pb-3 text-white/20">
        © 2024 All rights reserved.
      </p>
    </div>
  );
}

export default App;
