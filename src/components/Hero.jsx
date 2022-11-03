import React from "react";
import img1 from "assets/img-hero.svg";
import img2 from "assets/img-hero2.svg";
import img3 from "assets/img-hero3.svg";
import img4 from "assets/img-hero4.svg";

const Hero = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt="img1" />
        <p className="absolute bottom-40 w-full items-center px-5 py-4 text-center text-white font-bold text-[32px]">
          Climbing Mountains Is Now Easier
        </p>
        <p className="absolute bottom-40 w-full items-center text-center text-white font-normal text-base">
          Explore Mount Pangrango simply by registering and exploring.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white ml-20"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white mr-20"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt="img2" />
        <p className="absolute bottom-40 w-full items-center px-5 py-4 text-center text-white font-bold text-[32px]">
          Climbing Mountains Is Now Easier
        </p>
        <p className="absolute bottom-40 w-full items-center text-center text-white font-normal text-base">
          Explore Mount Pangrango simply by registering and exploring.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white ml-20"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white mr-20"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" alt="img3" />
        <p className="absolute bottom-40 w-full items-center px-5 py-4 text-center text-white font-bold text-[32px]">
          Climbing Mountains Is Now Easier
        </p>
        <p className="absolute bottom-40 w-full items-center text-center text-white font-normal text-base">
          Explore Mount Pangrango simply by registering and exploring.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white ml-20"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white mr-20"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt="img4" />
        <p className="absolute bottom-40 w-full items-center px-5 py-4 text-center text-white font-bold text-[32px]">
          Climbing Mountains Is Now Easier
        </p>
        <p className="absolute bottom-40 w-full items-center text-center text-white font-normal text-base">
          Explore Mount Pangrango simply by registering and exploring.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white ml-20"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#B2B2B2] opacity-40 border-none text-white mr-20"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
