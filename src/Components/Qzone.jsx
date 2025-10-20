import React from "react";
import Swimming from "../assets/swimming.png";
import Class from "../assets/class.png";
import Playground from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-300 p-2">
      <h2 className="text-2xl font-semibold">Q-zone</h2>
      <div className="w-full flex flex-col gap-5 ">
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
