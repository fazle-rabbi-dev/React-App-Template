import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  isUserLoading: true,
  user: null,
  
  initializeUser: async () => {
    set({
      isUserLoading: false
    });
  },
  
  updateAuthStatus: (user) => {
    if(user) {
      set({
        isLoggedIn: true,
        user
      });
    }
  }
}));
