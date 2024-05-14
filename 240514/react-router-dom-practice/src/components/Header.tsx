import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <nav className="bg-blue-100 fixed top-0 left-0 w-full flex justify-center gap-4">
      <Link to="/">Home</Link>
      <Link to="/a">A</Link>
      <Link to="/b">B</Link>
      <Link to="/c">C</Link>
    </nav>
  );
};

export default Header;
