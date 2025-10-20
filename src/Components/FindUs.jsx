import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn justify-start join-item">
            <SiFacebook />
            FaceBook
          </button>
          <button className="btn justify-start join-item">
            <FaSquareTwitter />
            Twitter
          </button>
          <button className="btn justify-start join-item">
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
