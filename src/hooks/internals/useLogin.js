import { useNavigate } from "react-router-dom";

import { signInWithGoogle, signInWithGithub } from "@/lib/firebase/api";
import { useLoginUserAccount, useSocialLogin } from "@/lib/react-query";
import { useUserStore } from "@/stores";
import {
  showToast,
  showAlert,
  playSound,
  LocalStorage,
  capitalizeFirstLetter
} from "@/lib/utils";


export const useLogin = () => {
  const { mutateAsync: loginUserAccount, isPending: isLogining } =
    useLoginUserAccount();
  const { mutateAsync: socialLogin, isPending: isLoginingWithSocial } =
    useSocialLogin();

  const navigate = useNavigate();

  const updateAuthStatus = useUserStore(state => state.updateAuthStatus);
  const toggleLoginStatus = useUserStore(state => state.toggleLoginStatus);

  // Helper
  const loginSuccessful = (message, loggedInUser) => {
    playSound.success();
    showToast(message);
    LocalStorage.setItem("user", loggedInUser);
    updateAuthStatus(loggedInUser);
    /*setTimeout(function () {
      navigate("/dashboard");
    }, 4000);*/
  };

  // ╭────────────────────────────────────────────────────────╮
  // │      Email+Password Login
  // ╰────────────────────────────────────────────────────────╯
  const handleEmaiPasswordLogin = async credentials => {
    try {
      toggleLoginStatus("email");
      const res = await loginUserAccount(credentials);
      if (!res) throw new Error("Failed to login. Try again.");

      /* ==> "data" contains "user" property and "user" contains: { _id, email, accessToken }  <== */
      const { success, message, data } = res;

      if (success) {
        loginSuccessful(message, data.user);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      playSound.error();
      showAlert("Error occured!", error.message, "error");
      console.log({
        message: "Email+Password login failed.",
        location: "useLogin.js >> handleEmaiPasswordLogin",
        details: error
      });
    } finally {
      toggleLoginStatus("email");
    }
  };

  // ╭────────────────────────────────────────────────────────╮
  // │      Social Login With (Google & Github)
  // ╰────────────────────────────────────────────────────────╯
  const handleSocialLogin = async platform => {
    try {
      if (!["google", "github"].includes(platform)) {
        throw new Error("Oopps! invalid platform.");
      }

      const user =
        platform === "google"
          ? await signInWithGoogle()
          : await signInWithGithub();
      if (!user) {
        throw new Error(
          "Oops! Something went wrong. Maybe you have already an account. Try to login with different platform."
        );
      }

      /* ==> Create user account in db & Login <== */
      toggleLoginStatus("social");
      const res = await socialLogin({ platform, user });
      console.log({
        message: `${capitalizeFirstLetter(platform)} login status.`,
        res,
        line_number: 82
      });

      if (!res) throw new Error("Failed to login. Try again.");
      const { success, message, data } = res;

      if (success) {
        loginSuccessful(message, data.user);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      playSound.error();
      showAlert("Error!", error.message, "error");
      console.info({
        message: "Social login failed.",
        location: "useLogin.js >> socialLogin()",
        details: error
      });
    } finally {
      toggleLoginStatus("social");
    }
  };

  return {
    handleEmaiPasswordLogin,
    handleSocialLogin,
    isLogining,
    isLoginingWithSocial
  };
};
