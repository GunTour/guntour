import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import { ButtonLogin, ButtonRegisterAnonym } from "components/Button";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-7">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="" className="flex items-center">
          <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <p className="text-secondary font-bold text-2xl">Gun</p>
          <span className="text-primary font-bold text-2xl">Tour</span>
        </Link>

        <div className="flex items-center md:order-2">
          <Link to="">
            <p className="px-4 py-2">
              <ButtonLogin/>
            </p>
          </Link>

          <Link to="">
            <p className=" px-4 py-2">
              <ButtonRegisterAnonym/>
            </p>
          </Link>
        </div>

        <div
          className="justify-between items-center w-full text-sm md:flex md:w-auto md:order-1"
          id="mega-menu"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link to="">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <Link to="">
                <p className="font-semibold text-xl block py-2 pr-4 pl-3 text-secondary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Guide
                </p>
              </Link>
            </li>

            <li>
              <Link to="">
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
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="" className="flex items-center">
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
                <p className="justify-between active:bg-slate-200 text-base font-normal">
                  My Booking
                </p>
              </li>
              <li>
                <p className="active:bg-slate-200 text-base font-normal">
                  Become Ranger
                </p>
              </li>
              <div className="divider m-0" />
              <li>
                <p className="active:bg-slate-200 text-base font-normal">
                  Logout
                </p>
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
              <Link to="/home">
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

export { Navbar, NavbarLogin };
