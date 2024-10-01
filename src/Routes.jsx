import { Routes, Route } from "react-router-dom";
import { Home, NotFound, SignUp, Login } from "@/pages";
import { RootLayout, AuthLayout } from "@/components";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route element={<RootLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
      
      {/* Public Route */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;