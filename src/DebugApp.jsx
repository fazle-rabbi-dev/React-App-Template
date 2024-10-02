import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import eruda from "eruda";
import AppRoutes from "./Routes.jsx";

function DebugApp() {
  // Eruda console
  useEffect(() => {
    eruda.init({
      element: document.getElementById("console"),
      tools: ["console"]
    });
  }, []);

  return (
    <>
      
      <Toaster />
      <p id="console"></p>
    </>
  );
}

export default DebugApp;
