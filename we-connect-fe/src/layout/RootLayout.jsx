import Loading from "@/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Supports weights 100-900
import '@fontsource-variable/public-sans/wght.css';

function RootLayout() {
  return (
    <div>
      <Suspense Outlet={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default RootLayout;
