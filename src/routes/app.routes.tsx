import { Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Create from "@/pages/Create";
import Detail from "@/pages/Detail";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/create" element={<Create />} />
    <Route path="/detail/:id" element={<Detail />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
