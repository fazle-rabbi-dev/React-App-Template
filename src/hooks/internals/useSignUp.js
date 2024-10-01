import { useNavigate } from "react-router-dom";

import { useCreateUserAccount } from "@/lib/react-query";
import { showToast, showAlert, LocalStorage, validateEmail } from "@/lib/utils";


const successSound = new Audio("/sounds/success.wav");
const errorSound = new Audio("/sounds/oops.wav");

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutateAsync: createAccount, isPending: isCreatingAccount } =
    useCreateUserAccount();

  const handleSignup = async data => {
    try {
      if (!validateEmail(data.email)) {
        throw new Error("Invalid email address");
      }
      
      if (data.password !== data.confirmPassword) {
        throw new Error("Confirm password didn't matched with password.");
      }
      
      const res = await createAccount(data);

      if (res?.success) {
        showToast(
          "Signup is successful. Check your email inbox to confirm your account.",
          "success",
          5000
        );
        successSound.play();
        navigate("/login");
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      showAlert("Error!", error.message, "error");
      errorSound.play();
      console.log({
        error,
        location: "SignUp.jsx"
      });
    }
  };

  return { handleSignup, isCreatingAccount };
};
