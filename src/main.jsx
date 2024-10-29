import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'; // Adjust the import based on your directory structure
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // Add more routes as necessary
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
