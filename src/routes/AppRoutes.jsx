import React from "react";
import Login from "@/pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import CombineBars from "@/features/CombineBars";
import Dashboard from "@/pages/Dashboard";
import Work from "@/pages/Work";
import NotFound from "@/pages/notFound";
import AuthRedirect from "./AuthRedirect";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<AuthRedirect />} />
      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route element={<CombineBars />}>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/work"} element={<Work />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path={"/login"} element={<Login />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRoutes;
