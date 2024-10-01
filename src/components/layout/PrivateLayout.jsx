import { Outlet } from "react-router-dom";
import { MainLayout } from "@/components";

export const PrivateLayout = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};
