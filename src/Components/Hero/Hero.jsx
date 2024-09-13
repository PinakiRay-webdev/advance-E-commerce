import React from "react";
import Side from "./Side";
import Banner from "./Banner";
const Hero = () => {
  return (
    <div className="w-full h-fit" >
      <div className="max-w-screen-xl mx-auto px-2 flex" >
        <Side />
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
