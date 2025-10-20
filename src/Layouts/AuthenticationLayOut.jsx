import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthenticationLayOut = () => {
  return (
    <div className="bg-base-200 h-screen">
      <div className="w-11/12 mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthenticationLayOut;
