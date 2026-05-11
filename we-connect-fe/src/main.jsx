import { theme } from "@/configs/muiConfig";
import TraillerModelProvider from "@/context/TraillerModelProvider";
import AuthLayout from "@/layout/AuthLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import OTPVerifyPage from "@/pages/OTPVerifyPage";
import RegisterPage from "@/pages/RegisterPage";
import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

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
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/Register",
        element: <RegisterPage />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
      {
        path: "/verify-otp",
        element: <OTPVerifyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TraillerModelProvider>
          <RouterProvider router={router} />
        </TraillerModelProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
