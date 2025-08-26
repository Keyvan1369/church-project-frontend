import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SermonPage } from "./pages/SermonPage";
import { BlogPage } from "./pages/BlogPage";
import { EventPage } from "./pages/EventPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/aboutUs", element: <AboutUsPage /> },
  { path: "/sermon", element: <SermonPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/event", element: <EventPage /> },
  { path: "/contact", element: <ContactPage /> },





]);
