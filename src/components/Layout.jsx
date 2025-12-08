import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MdInfo, MdHome, MdLogout } from "react-icons/md";
import Profile from "./Profile";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("exp_token") || null;

  const liStyle =
    "flex items-center mb-4 text-lg text-gray-700 hover:text-cyan-800";
  return (
    <div className="container min-w-11/12 p-4 mx-auto ">
      <div className="relative">
        {/* Hamburger button */}
        <div
          className="w-8 h-8 flex flex-col justify-around cursor-pointer z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 bg-cyan-800 rounded transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-3" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-cyan-800 rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 bg-cyan-800 rounded transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </div>

        {/* Sidebar Menu */}
        <nav
          className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-8 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <ul className="flex flex-col space-y-6 mt-10 text-lg">
            {token ? (
              <>
                <li className={liStyle}>
                  <MdHome />
                  <Link to="/">&nbsp;Home</Link>
                </li>
                <li className={liStyle}>
                  <MdInfo />
                  <Link to="/info">&nbsp;Info</Link>
                </li>
                <li className={liStyle}>
                  <MdLogout />
                  <Link to="/logout">&nbsp;Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="absolute right-0 top-0">
          <Profile />
        </div>
      </div>
      <div className="w-full border-t border-gray-300 mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
