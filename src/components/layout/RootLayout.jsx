import { Outlet } from "react-router-dom";
import { MainLayout } from "@/components";

export const RootLayout = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};
