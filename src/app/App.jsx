import React from "react";
import { RouterProvider } from "react-router";

import { createBrowserRouter } from "react-router";
import routes from "../app/routes.jsx";

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
