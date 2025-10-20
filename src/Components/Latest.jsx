import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex gap-3 items-center bg-base-300 p-2 my-10">
      <button className="btn btn-secondary"> Latest</button>
      <Marquee className="flex gap-5" speed={80} pauseOnHover={true}>
        <h2 className="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
        <h2 className="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
        <h2 className="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
      </Marquee>
    </div>
  );
};

export default Latest;
