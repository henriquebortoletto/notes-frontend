import { BrowserRouter } from "react-router-dom";

import { useAuth } from "@/hooks/auth";
import AppRoutes from "@/routes/app.routes";
import AuthRoutes from "@/routes/auth.routes";

const Router = () => {
  const { user } = useAuth();
  const userIsAuthenticated = user;

  return (
    <BrowserRouter>
      {userIsAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export default Router;
