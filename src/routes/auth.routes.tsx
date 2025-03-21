import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { env } from "@/env";

const AuthRoutes = () => {
  const user = localStorage.getItem(env.VITE_KEY_APP);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
};

export default AuthRoutes;
