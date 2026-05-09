import TraillerModelProvider from "@/context/TraillerModelProvider";
import HomePage from "@/pages/HomePage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import { theme } from "@/configs/muiConfig";
import { ThemeProvider } from "@emotion/react";

 
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
    <ThemeProvider theme={theme}>

    <TraillerModelProvider>
      <RouterProvider router={router} />
    </TraillerModelProvider>
    </ThemeProvider>
  </StrictMode>,
);
