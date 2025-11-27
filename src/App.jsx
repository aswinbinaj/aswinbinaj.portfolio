import React from "react";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import BlogPage from "./pages/BlogPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,

      children: [
        { index: true, element: <HomePage /> },
        {
          path: "blogs",
          element: <BlogPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
