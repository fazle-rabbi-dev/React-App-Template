import { Outlet, Navigate } from "react-router-dom";
import { MainLayout, FallbackComponent, PageLoader } from "@/components";
import { ErrorBoundary } from "react-error-boundary";
import { useUserStore } from "@/stores";

export const PrivateLayout = () => {
  const isUserLoading = useUserStore(state => state.isUserLoading);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  
  console.log("PrivateLayout.jsx")
  
  if(isUserLoading) {
    return <PageLoader />
  }
  
  if (!isUserLoading && !isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ErrorBoundary>
  );
};
