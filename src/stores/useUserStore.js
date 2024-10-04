import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  is_Email_Login_In_Progress: false,
  is_Social_Login_In_Progress: false,
  isUserLoading: true,
  user: null,
  
  initializeUser: async () => {
    /*set({
      isUserLoading: false
    });*/
  },
  
  updateAuthStatus: (user) => {
    if(user) {
      set({
        isLoggedIn: true,
        user,
        isLoginInProgress: false,
      });
    }
  },
  
  toggleLoginStatus: (type) => {
    if(type === "email") {
      set({
        is_Email_Login_In_Progress: !get().is_Email_Login_In_Progress
      });
    } else {
      set({
        is_Social_Login_In_Progress: !get().is_Social_Login_In_Progress
      });
    }
  }
}));
