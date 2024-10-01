import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  isOnDarkTheme: localStorage.getItem('theme') === 'dark',

  toggleTheme: () => {
    const isDark = !get().isOnDarkTheme;
    set({ isOnDarkTheme: isDark });
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  },
  
  enableDarkTheme: () => {
    set({ isOnDarkTheme: true });
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  },

  disableDarkTheme: () => {
    set({ isOnDarkTheme: false });
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  },

  // Initialize theme on load
  initializeTheme: () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      set({ isOnDarkTheme: true });
      document.documentElement.classList.add('dark');
    } else {
      set({ isOnDarkTheme: false });
      document.documentElement.classList.remove('dark');
    }
  }
}));
