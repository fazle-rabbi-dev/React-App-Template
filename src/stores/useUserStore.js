import { create } from "zustand";
// import { getUser } from "@/lib/api";

export const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  isUserLoading: true,
  user: null,
  count: 0,
  
  initializeUser: async () => {
    // const res = await getUser();
    console.log({ initializeUser });
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
