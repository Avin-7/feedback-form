import React from "react";
import logoImg from "../assets/logoImg.png";

function Logo() {
  return (
    <div>
      <div className=" flex justify-center items-center pt-[23px] px-[99px]">
        <img src={logoImg} className=" w-[200px] h-[90px] rounded-[8px]" alt="" />
      </div>
    </div>
  );
}

export default Logo;
