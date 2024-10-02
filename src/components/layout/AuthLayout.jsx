import { Outlet, Navigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Undo2 } from "lucide-react";

import { MainLayout, AuthPageHeader } from "@/components";
import { useUserStore } from "@/stores";

export const AuthLayout = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const { pathname } = useLocation();

  let title = "Sign up";
  if (pathname === "/login") {
    title = "Sign in";
  }

  if (isLoggedIn) {
    return <Navigate to="/resources" />;
  }

  return (
    <MainLayout onlyChildren>
      <section className="flex flex-col justify-center items-center pb-16">
        <AuthPageHeader parent={title} />
        <Outlet />
      </section>
    </MainLayout>
  );
};
