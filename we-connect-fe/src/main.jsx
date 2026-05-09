import TraillerModelProvider from "@/context/TraillerModelProvider";
import HomePage from "@/pages/HomePage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";

 
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
       
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TraillerModelProvider>
      <RouterProvider router={router} />
    </TraillerModelProvider>
  </StrictMode>,
);
