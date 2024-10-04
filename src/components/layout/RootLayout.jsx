import { Outlet, Navigate } from "react-router-dom";
import { MainLayout, FallbackComponent, PageLoader } from "@/components";
import { ErrorBoundary } from "react-error-boundary";
import { useUserStore } from "@/stores";

export const RootLayout = () => {
  const isUserLoading = useUserStore(state => state.isUserLoading);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  
  if(isUserLoading) {
    return <PageLoader />
  }
  
  console.log("RootLayout.jsx")
  
  if (isLoggedIn) {
    return <Navigate to="/dashboard_root9" />;
  }
  
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ErrorBoundary>
  );
};
