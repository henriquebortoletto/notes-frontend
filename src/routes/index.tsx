import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@/routes/app.routes";
import AuthRoutes from "@/routes/auth.routes";

const Router = () => {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export default Router;
