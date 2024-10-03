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
    <div className="w-full mb-10">
      <h1 className="heading2">
        {
          parent === "Sign up" ? "Create an account" : "Sign in to your account"
        }
      </h1>
      <p className='mt-2 text-gray-700'>
        {
          parent === "Sign up" ? (
            <>
              Already have an account? {" "}
              <Link className='text-blue-600' to="/login">Sign in</Link>
            </>
          ) : (
            <>
              Dont have an account? {" "} 
              <Link className='text-blue-600' to="/sign-up">Sign up</Link>
            </>
          )
        }
      </p>
      
      {/* Social Button Group */}
      <div className="mt-8 flex-between gap-3">
        <button className='h-16 flex-1 flex-center px-3 rounded-2xl border-[1px] border-gray-200 hover:bg-gray-100' type="button">
          <img width="20%" className="" src="/images/google.png" alt="Google" />
        </button>
        <button className='h-16 flex-1 flex-center px-3 rounded-2xl border-[1px] border-gray-200 hover:bg-gray-100' type="button">
          <img width="20%" className="" src="/images/github.png" alt="Github" />
        </button>
      </div>
      
      <div className="mt-3 flex items-center gap-2">
        <span className='h-[1px] bg-gray-200 flex-1'></span>
        <span className='text-gray-600'>Or continue with email</span>
        <span className='h-[1px] bg-gray-200 flex-1'></span>
      </div>
    </div>
  );
};
