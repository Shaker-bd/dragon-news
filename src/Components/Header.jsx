import React from "react";
import Logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center pt-5 space-y-3">
      <img className="w-[400px]" src={Logo} alt="" />
      <h2 className="text-accent">Journalism Without Fear or Favour</h2>

      <p className="text-accent">
        {format(new Date(), "EEEE , MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
