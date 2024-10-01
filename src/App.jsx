import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import eruda from "eruda";

import AppRoutes from "./Routes.jsx";
import { useThemeStore, useUserStore } from "@/stores";


function App() {
  const initializeTheme = useThemeStore(state => state.initializeTheme);
  const initializeUser = useUserStore(state => state.initializeUser);
  
  useEffect(() => {
    initializeTheme();
    initializeUser();
    
    // Eruda console
    eruda.init({
      element: document.getElementById("console"),
      tools: ["console"]
    });
  }, []);
  
  return (
    <>
      <AppRoutes />
      <Toaster />
      <p id="console"></p>
    </>
  );
}

export default App;
