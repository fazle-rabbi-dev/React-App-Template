import { useNavigate } from "react-router-dom";

import { useCreateUserAccount } from "@/lib/react-query";
import { playSound, showToast, showAlert, LocalStorage, validateEmail } from "@/lib/utils";


export const useSignup = () => {
  const navigate = useNavigate();
  const { mutateAsync: createAccount, isPending: isCreatingAccount } =
    useCreateUserAccount();
  
  // ╭────────────────────────────────────────────────────────╮
  // │      Handle User Account Creation Process
  // ╰────────────────────────────────────────────────────────╯
  const handleSignup = async data => {
    try {
      /* ==> Validation <== */
      if (data.password !== data.confirmPassword) {
        throw new Error("Confirm password didn't matched with password.");
      }
      
      /* ==> Call Api <== */
      const res = await createAccount(data);
      if (!res) throw new Error("Failed to login.");
      const { success, message } = res;
      
      if (success) {
        playSound.success();
        showToast(
          "Signup is successful. Check your email inbox to confirm your account.",
          "success",
          5000
        );
        setTimeout(function() {
          navigate("/login");
        }, 400);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      playSound.error();
      showAlert("Error occured!", error.message, "error");
      console.error({
        happened: "Signup failed.",
        location: "useSignup.js >> handleSignup",
        details: error
      });
    }
  };

  return { handleSignup, isCreatingAccount };
};
