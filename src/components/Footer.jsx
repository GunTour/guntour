import React from "react";
import logo from "assets/logo2.svg";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full text-center lg:text-left bg-secondary text-base-content">
      <div className="md:text-left py-5">
        <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          <div>
            <Link to="" className="flex items-center mb-6">
              <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
              <p className="text-white font-bold text-2xl">Gun</p>
              <span className="text-primary font-bold text-2xl">Tour</span>
            </Link>
            <p className="text-white font-light text-sm">
              We always make our customer <br /> happy by providing as many{" "}
              <br />
              choises as possible
            </p>
          </div>

          <div>
            <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
              <MdLocationPin className="fill-primary text-3xl mr-4" />
              Kabupaten Cianjur, Jawa Barat, Indonesia
            </p>
            <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
              <IoTime className="fill-primary text-2xl mr-4" />
              07.30 AM - 16.00 PM
            </p>
            <a
              href="tel:+6221-2549812"
              className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6"
            >
              <RiContactsFill className="fill-primary text-2xl mr-4" />
              (021)-2549812
            </a>
            <a
              className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6"
              href="mailto:guntour@mail.id"
            >
              <MdEmail className="fill-primary text-2xl mr-4" />
              guntour@mail.id
            </a>
          </div>

          <div>
            <iframe
              className="w-72 h-40 rounded-lg"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Gunung%20Gede%20Pangrango&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              title="map"
            ></iframe>
          </div>
        </div>

        <hr className="my-5 border border-[#2B5452]" />
        <p className="text-sm font-light text-white sm:text-center">
          Taman Nasional Gunung Gede © 2022 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
