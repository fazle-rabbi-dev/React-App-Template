import { Outlet, Navigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Undo2 } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";
import { useShallow } from "zustand/react/shallow";

import {
  MainLayout,
  AuthPageHeader,
  Header,
  Loader,
  FallbackComponent,
  PageLoader
} from "@/components";
import { useUserStore } from "@/stores";
import { useLogin } from "@/hooks/internals";

export const AuthLayout = () => {
  const { is_Social_Login_In_Progress, isLoggedIn, isUserLoading } =
    useUserStore(
      useShallow(state => {
        return {
          is_Social_Login_In_Progress: state.is_Social_Login_In_Progress,
          isLoggedIn: state.isLoggedIn,
          isUserLoading: state.isUserLoading
        };
      })
    );

  const { pathname } = useLocation();
  const { isLoginingWithSocial } = useLogin();

  let title = "Sign up";
  if (pathname === "/login") {
    title = "Sign in";
  }

  if (isUserLoading) {
    return <PageLoader />;
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard_auth" />;
  }

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Header />
      <MainLayout onlyChildren>
        {is_Social_Login_In_Progress ? (
          <div className="fixed inset-0 h-full w-full flex-center bg-black-50/70 backdrop-blur-sm py-10 px-20">
            <div className="text-center">
              <h3 className="font-author-medium">Login is in progress..</h3>
              <Loader />
            </div>
          </div>
        ) : (
          <section className="flex flex-col justify-center items-center pb-16 md:max-w-md md:mx-auto">
            <AuthPageHeader parent={title} />
            <Outlet />
          </section>
        )}
      </MainLayout>
    </ErrorBoundary>
  );
};
