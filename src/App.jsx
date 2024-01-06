import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Pages/Nav";
import Dashboard from "./Pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [{ path: "/", element: <Dashboard /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
