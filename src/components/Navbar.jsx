import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import logo2 from "assets/logo2.svg";
import { BsGrid1X2Fill, BsPeopleFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { ButtonLogin, ButtonRegisterAnonym } from "components/Button";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-7">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <p className="text-secondary font-bold text-2xl">Gun</p>
          <span className="text-primary font-bold text-2xl">Tour</span>
        </Link>

        <div className="flex items-center md:order-2">
          <Link to="/login">
            <p className="px-4 py-2">
              <ButtonLogin />
            </p>
          </Link>

          <Link to="/register">
            <p className=" px-4 py-2">
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
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <Link to="/guide">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Guide
                </p>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
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
  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-7">
      <div className="flex flex-wrap justify-between items-center mx-20">
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <p className="text-secondary font-bold text-2xl">Gun</p>
          <span className="text-primary font-bold text-2xl">Tour</span>
        </Link>

        <div className="flex items-center md:order-2">
          <Link to="">
            <p className="font-medium text-base text-white bg-primary hover:bg-line hover:text-primary focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">
              Booking Now
            </p>
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={logo} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-lg w-52"
            >
              <li>
                <p className="justify-between active:bg-slate-200">
                  My Booking{" "}
                </p>
              </li>
              <li>
                <p className="active:bg-slate-200">Become Ranger</p>
              </li>
              <li>
                <p className="active:bg-slate-200">Logout</p>
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
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <Link to="/guide">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Guide
                </p>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
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
      <div className="navbar ml-10 shadow-sm bg-[#E0E0E0] h-[80px] w-[1100px]">
        <div className="flex-1">

          <a className="btn btn-ghost normal-case font-semibold text-2xl">
            Dashboard
          </a>

        </div>
        <div className="flex-none gap-2">
          <div className="w-3/6 h-10 md:flex flex-none mt-form-control mr-16 input hidden bg-[#e5e4e4] border items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-[#cccccc] bg-[#e5e4e4]"
            />
            <button className="py-3.5 border-y-2 border-l-2 border-none bg-main rounded-l-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#cccccc]"
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          <div className="dropdown dropdown-end w-40 pr-10 grid grid-flow-col auto-cols-max">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar py-1"
            >
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <div className="font-semibold text-sm py-4">Hai, John Doe</div>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div>
      <div className="drawer drawer-side w-80 bg-secondary">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-secondary text-base-content">
          <div className="mb-20 mt-10">
            <Link to="" className="flex items-center">
              <img src={logo2} alt="logo" className="mr-3 h-6 sm:h-9" />
              <p className="text-white font-bold text-2xl">Gun</p>
              <span className="text-primary font-bold text-2xl">Tour</span>
            </Link>
          </div>
          <div className="text-white font-medium">Menu</div>
          <li>
            <a className="text-white font-medium">
              <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
                <BsGrid1X2Fill className="fill-white text-2xl mr-4" />
                Products
              </p>
            </a>
          </li>

          <li>
            <a className="text-white font-medium">
              <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
                <BsPeopleFill className="fill-white text-2xl mr-4" />
                Rangers
              </p>
            </a>
          </li>

          <li>
            <a className="text-white font-medium">
              <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
                <HiUser className="fill-white text-2xl mr-4" />
                Users
              </p>
            </a>
          </li>

          <div className="text-white font-medium mt-80">
            <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
              <BiLogOut className="fill-white text-2xl mr-4" />
              Logout
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default { Navbar, NavbarLogin, NavbarAdmin, Sidebar };
