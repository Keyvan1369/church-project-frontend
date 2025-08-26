import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
]);
