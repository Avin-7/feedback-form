import React from "react";
import bgImg from "../assets/bgImg.jpg";

function Hero() {
  return (
    <div>
      <div className=" flex justify-center items-center pt-[23px]">
        <img
          src={bgImg}
          className=" w-full h-[160px] rounded-b-[8px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
