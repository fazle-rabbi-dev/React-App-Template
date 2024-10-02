import { Outlet, Navigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Undo2 } from "lucide-react";

import { MainLayout, AuthPageHeader } from "@/components";
import { useUserStore } from "@/stores";

export const AuthLayout = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const { pathname } = useLocation();

  let title = "Sign up";
  let alternativeLink = "/login";
  let footerMessage = "Already signed up?";
  if (pathname === "/login") {
    title = "Sign in";
    alternativeLink = "/sign-up";
    footerMessage = "Not yet sign up?";
  }

  if (isLoggedIn) {
    return <Navigate to="/resources" />;
  }

  return (
    <MainLayout onlyChildren>
      <section className="flex flex-col justify-center items-center pb-16">
        <AuthPageHeader parent={title} />

        <Outlet />

        <p className="mt-5 text-sm">
          <span>{footerMessage} </span>
          <Link
            className="text-violet-500"
            to={alternativeLink}
          >
            {alternativeLink.slice(1)}
          </Link>
        </p>
      </section>
    </MainLayout>
  );
};
