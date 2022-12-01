import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Extrato from "../pages/Extrato";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Deposito from "../pages/Deposito";
import Transferencia from "../pages/Transferencia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Transferencia",
    element: <Transferencia />,
  },
  {
    path: "/Extrato",
    element: <Extrato />,
  },
  {
    path: "/Saque",
    element: <Deposito />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
