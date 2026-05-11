// Supports weights 100-900
import Loading from "@/Loading";
import "@fontsource-variable/public-sans/wght.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="bg-dark-100 flex h-screen items-center justify-center">
      <form className="w-[450px]">
        <div className="rounded bg-white px-4 py-8">
          <div className="flex justify-center">
            <img src="/logo-register.png" />
          </div>
          <Suspense Outlet={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </form>
    </div>
  );
}
export default AuthLayout;
