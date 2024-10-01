import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Undo2 } from "lucide-react";

import { useLogin } from "@/hooks/internals";

export const AuthPageHeader = ({ parent }) => {
  const {
    handleSocialLogin,
    isLoginingWithSocial
  } = useLogin();
  
  const disableButton = () => {
    return isLoginingWithSocial;
  };

  return (
    <div className="">
      <p className="flex items-center gap-3">
        <span>
          <Undo2 size={20} />
        </span>
        <Link
          to="/"
          className="text-sm"
        >
          Go Back
        </Link>
      </p>

      <div className="mt-6 text-center">
        <span className="text-2xl">🌐</span>
        <h1 className="mt-4 mx-8 text-2xl font-medium text-center tracking-wide leading-8">
          {parent} to Online Resource Network
        </h1>
        <div className="flex flex-col w-full mt-10 space-y-4">
          <button
            onClick={() => handleSocialLogin("google")}
            className="social-auth-btn"
            // disabled={disableButton}
          >
            <img
              width="16px"
              src="/images/google.png"
              alt="Google"
            />
            <span>{parent} with Google</span>
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            className="social-auth-btn"
            // disabled={disableButton}
          >
            <img
              width="16px"
              src="/images/github.png"
              alt="Github"
            />
            <span>{parent} with Github</span>
          </button>
        </div>
      </div>

      <p className="w-full flex items-center gap-2 my-5">
        <span className="hr-line"></span>
        <span className="text-gray-70">or</span>
        <span className="hr-line"></span>
      </p>
    </div>
  );
};
