import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export function AppWrapperComponent({ toggleOverflow }) {
  return (
    <>
      <Header toggleOverflow={toggleOverflow} />
      <Outlet />
      <Footer />
    </>
  );
}
