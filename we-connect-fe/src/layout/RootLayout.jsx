import Loading from "@/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

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
