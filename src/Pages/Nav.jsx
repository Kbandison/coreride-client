import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Nav = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Nav;
