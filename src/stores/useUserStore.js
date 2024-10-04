import { create } from "zustand";
import { LocalStorage } from "@/lib/utils";
import { getUser } from "@/lib/api";

export const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  is_Email_Login_In_Progress: false,
  is_Social_Login_In_Progress: false,
  isUserLoading: true,
  user: null,
  
  initializeUser: async () => {
    const user = await getUser();
    
    set({
      isLoggedIn: !!user,
      isUserLoading: false,
      user: user || null
    });
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
  },
  
  logout: () => {
    LocalStorage.removeItem('user');
    set({
      isLoggedIn: false,
      user: null
    });
  }
}));
