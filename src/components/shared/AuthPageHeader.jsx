import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Undo2 } from "lucide-react";

import { useLogin } from "@/hooks/internals";
import { useUserStore } from "@/stores";


export const AuthPageHeader = ({ parent }) => {
  const {
    handleSocialLogin
  } = useLogin();
  const is_Email_Login_In_Progress = useUserStore(state => state.is_Email_Login_In_Progress);
  
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
              <Link className={`text-blue-600 ${is_Email_Login_In_Progress && "pointer-events-none"}`} to="/login">Sign in</Link>
            </>
          ) : (
            <>
              Dont have an account? {" "} 
              <Link className={`text-blue-600 ${is_Email_Login_In_Progress && "pointer-events-none"}`} to="/sign-up">Sign up</Link>
            </>
          )
        }
      </p>
      
      {/* Social Button Group */}
      <div className="mt-8 flex-between gap-3">
        <button onClick={() => handleSocialLogin('google')} className='social-login-btn' type="button" disabled={is_Email_Login_In_Progress}>
          <img width="20%" className="" src="/images/google.png" alt="Google" />
        </button>
        <button onClick={() => handleSocialLogin('github')} className='social-login-btn' type="button" disabled={is_Email_Login_In_Progress}>
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
