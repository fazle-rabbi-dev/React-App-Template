import { Navigate } from "react-router-dom";
import { useUserStore } from "@/stores"
import { Hero, Features } from "@/components";

export const Home = () => {
  const { isLoggedIn } = useUserStore(state => ({
    isLoggedIn: state.isLoggedIn
  }));
  
  if(isLoggedIn) {
    return <Navigate to="/resources" />
  }
  
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};
