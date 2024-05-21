import { Outlet } from "react-router-dom";

export function ProductWrapper() {
  return (
    <div className={"product-wrapper"}>
      <Outlet />
    </div>
  );
}
