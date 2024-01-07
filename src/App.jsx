import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Pages/Nav";
import Dashboard from "./Pages/Dashboard";
import Vehicles from "./Pages/Vehicles";
import About_us from "./Pages/About_us";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/vehicles", element: <Vehicles /> },
        { path: "/about-us", element: <About_us /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
