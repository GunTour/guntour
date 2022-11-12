import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

import { ButtonLogin, ButtonRegisterAnonym } from "components/Button";

import { BsPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import logo from "assets/logo.svg";
import logo2 from "assets/logo-guntour.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-7">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link id="logo" to="/" className="flex items-center">
          <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <p className="text-secondary font-bold text-2xl">Gun</p>
          <span className="text-primary font-bold text-2xl">Tour</span>
        </Link>

        <div className="flex items-center md:order-2">
          <Link to="/login">
            <p id="login-anonym" className="px-4 py-2">
              <ButtonLogin />
            </p>
          </Link>

          <Link to="/register">
            <p id="register-anonym" className="px-4 py-2">
              <ButtonRegisterAnonym />
            </p>
          </Link>
        </div>

        <div
          className="justify-between items-center w-full text-sm md:flex md:w-auto md:order-1"
          id="mega-menu"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link to="/">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
                id="home-anonym"
                >
                  Home
                </p>
              </Link>
            </li>

            <li>
              <Link to="/guideanonym">
                <p id="guide-anonym" className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Guide
                </p>
              </Link>
            </li>

            <li>
              <Link to={"/aboutanonym"}>
                <p id="about-anonym" className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  About
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavbarLogin = () => {
  const [cookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token");
    navigate("/");
  };

  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-7">
      <div className="flex flex-wrap justify-between items-center mx-20">
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <p className="text-secondary font-bold text-2xl">Gun</p>
          <span className="text-primary font-bold text-2xl">Tour</span>
        </Link>

        <div className="flex items-center md:order-2">
          <Link to="/booking">
            <p id="Booking-navbar" className="font-medium text-base text-white bg-primary hover:bg-line hover:text-primary focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">
              Booking Now
            </p>
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div id="dropdown-menu" className="w-10 rounded-full">
                <img src={logo} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact  dropdown-content bg-base-100 rounded-lg w-52"
            >
              <li>
                <Link id="mybooking-dropdown" to="/history">
                  <p className="justify-between active:bg-slate-200">
                    My Booking{" "}
                  </p>
                </Link>
              </li>
              <li>
                <Link id="become-ranger-dropdown" to="/ranger">
                  <p className="active:bg-slate-200">Become Ranger</p>
                </Link>
              </li>
              <li>
                <button
                  id="logout-dropdown"
                  onClick={() => handleLogout()}
                  className="active:bg-slate-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="justify-between items-center w-full text-sm md:flex md:w-auto md:order-1"
          id="mega-menu"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link to="/home">
                <p id="home" className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <Link to="/guide">
                <p id="guide" className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Guide
                </p>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <p id="about" className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  About
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavbarAdmin = () => {
  return (
    <div>
      <div className="navbar h-[80px] w-[1000px]">
        <div className="flex-1">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer-2" className="normal-case font-semibold text-2xl">Dashboard</label>
        </div>
        <div className="flex-none gap-2">
          <div className="w-40 pr-10 grid grid-flow-col auto-cols-max">
            <label tabIndex={0} className="btn-circle avatar py-1">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>

            <p className="font-semibold text-sm py-4">Hai, John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [cookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogoutAdmin = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          className="btn btn-primary drawer-button lg:hidden"
        >
          See Content
        </label>
      </div>

      <div className="drawer-side overflow-x-hidden">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-screen bg-secondary text-base-content">
          <div className="ml-2 mt-9 mb-16">
            <img src={logo2} alt="Logo" />
          </div>
          <p className="ml-4 text-white font-light text-base mb-3">Menu</p>
          
          <li className="text-white active:bg-green-900 mb-2">
            <Link id="product-sidebar" to="/admin">
              <MdDashboard className="fill-white text-2xl " />
              <p className="font-normal text-lg">Product</p>
            </Link>
          </li>
          <li className="text-white active:bg-green-900 mb-2">
            <Link id="ranges-sidebar" to="/adminranger">
              <BsPeopleFill className="fill-white text-2xl" />
              <p className="font-normal text-lg">Rangers</p>
            </Link>
          </li>
          <li className="text-white active:bg-green-900">
            <Link id="users-sidebar" to="/users">
              <FaUser className="fill-white text-xl" />
              <p className="font-normal text-lg ml-1">Users</p>
            </Link>
          </li>
          <li className="text-white mt-72">
            <button id="button-logout-sidebar" onClick={() => handleLogoutAdmin()} className="active:bg-slate-800">
              <RiLogoutBoxLine className="fill-white text-2xl" />
              <p>Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Navbar, NavbarLogin, NavbarAdmin, Sidebar };
