import { BrowserRouter } from "react-router-dom";

import { useSession } from "@/hooks/session";
import AppRoutes from "@/routes/app.routes";
import AuthRoutes from "@/routes/auth.routes";

const Router = () => {
  const { user } = useSession();

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
};

export default Router;
