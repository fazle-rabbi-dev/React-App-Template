import { Routes, Route } from "react-router-dom";
import { Home, NotFound, SignUp, Login, Dashboard } from "@/pages";
import { RootLayout, AuthLayout, PrivateLayout } from "@/components";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
      {/* Auth Route */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      
      {/* Private Route */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;