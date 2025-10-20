import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const SocialLogin = () => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold">Login With</h2>
      <div className="flex flex-col gap-2 mt-10">
        <button className="btn btn-outline btn-secondary">
          {" "}
          <FcGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary">
          {" "}
          <ImGithub />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
