import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@/routes/app.routes";
import AuthRoutes from "@/routes/auth.routes";
import { useSession } from "@/hooks/session";

const Router = () => {
  const { user } = useSession();

  return (
    <BrowserRouter>
      {user && <AppRoutes />}
      {!user && <AuthRoutes />}
    </BrowserRouter>
  );
};

export default Router;
