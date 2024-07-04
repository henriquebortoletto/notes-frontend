import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@/routes/app.routes";
import AuthRoutes from "@/routes/auth.routes";

const Router = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export default Router;
