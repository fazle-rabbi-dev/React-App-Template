import { Navigate } from "react-router-dom";
import { useUserStore } from "@/stores";
import { Hero } from "@/components";

export const Home = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <>
      <Hero />
    </>
  );
};
