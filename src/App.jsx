import React from "react";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

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
        {
          path : "/blog/:id",
          element: <BlogDetailsPage/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
