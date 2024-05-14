import { FC } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen mx-auto max-w-screen-md">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
