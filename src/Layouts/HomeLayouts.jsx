import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        {" "}
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <Latest></Latest>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section>Left</section>
        <section>
          <Outlet></Outlet>
        </section>
        <section>right</section>
      </main>
    </div>
  );
};

export default HomeLayouts;
