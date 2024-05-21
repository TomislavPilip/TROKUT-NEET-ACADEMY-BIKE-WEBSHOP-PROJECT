import { Outlet } from "react-router-dom";

export function AuthentificationWrapper() {
  return (
    <>
      <div className="authentification-wrapper">
        <h1>Authentification</h1>
        <Outlet />
      </div>
    </>
  );
}
