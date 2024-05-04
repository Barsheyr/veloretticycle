import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { SingleProduct, About, Cities, Landing, Product } from "./pages";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
