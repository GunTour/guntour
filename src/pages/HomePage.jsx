import React from "react";
import { WithRouter } from "utils/Navigation";

import Hero from "components/Hero";
import Layout from "components/Layout";
import { CardProduct } from "components/CardProduct";
import { ButtonJoin } from "components/Button";
import { BsPeopleFill } from "react-icons/bs";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Community from "assets/img-community.svg";

const HomePage = () => {
  return (
    <Layout>
      {/* Carousel */}
      <Hero />

      {/* Header */}
      <header>
        <h5 className="font-bold text-[32px] ml-20 my-12 text-secondary">
          FIND <span className="text-primary">POPULAR</span> RENTAL PRODUCTS
        </h5>
      </header>

      {/* Card Product */}
      <section className="mb-7 w-ful flex mx-3 md:mx-16 lg:mx-20 xl:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-9">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-end mr-20 md:mx-28 lg:mx-28 2xl:mx-28 mb-14 gap-8">
        <button className="w-14 h-14 rounded bg-none border-2 border-primary place-content-center grid content-center">
          <HiArrowLeft className="text-primary text-2xl" />
        </button>
        <button className="w-14 h-14 rounded bg-none border-2 border-primary place-content-center grid content-center">
          <HiArrowRight className="text-primary text-2xl" />
        </button>
      </div>

      {/* Section Is Climbers */}
      <section className="bg-secondary ">
        <div className="py-28 mx-20">
          <div className="flex">
            {/* Text */}
            <div>
              <div className="font-bold text-3xl text-white mb-3">
                <h5>
                  THE MOST{" "}
                  <span className="text-primary">
                    BEAUTIFUL <br />{" "}
                  </span>
                  CLIMBING ON MOUNTAIN
                </h5>
              </div>
              <div className="text-sm text-white font-light">
                The following is real-time climber data and <br />a comparison
                of visitors to Mount Gede
              </div>
            </div>

            {/* Climbers */}
            <div className="flex items-center ml-28">
              <div className="text-white flex items-center justify-center font-medium text-sm md:justify-start">
                <div className="bg-[#FEF3EB] p-4 rounded-lg">
                  <BsPeopleFill className="text-primary text-4xl" />
                </div>
                <p className="font-bold text-xl ml-3">
                  230 <br /> IS CLIMBERS
                </p>
              </div>
              <div className="text-white flex items-center justify-center font-medium text-sm md:justify-start ml-10">
                <div className="bg-[#FEF3EB] p-4 rounded-lg">
                  <BsPeopleFill className="text-primary text-4xl" />
                </div>
                <p className="font-bold text-xl ml-3">
                  140 <br /> MALE CLIMBER
                </p>
              </div>
              <div className="text-white flex items-center justify-center font-medium text-sm md:justify-start ml-10">
                <div className="bg-[#FEF3EB] p-4 rounded-lg">
                  <BsPeopleFill className="text-primary text-4xl" />
                </div>
                <p className="font-bold text-xl ml-3">
                  90 <br /> FEMALE CLIMBER
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="mx-20 mt-24 mb-36">
        <div className="flex justify-between">
          <div>
            <h5 className="font-bold text-[32px] mb-4">
              COMMUNITY SERVICE <br />{" "}
              <span className="text-primary">IS CALLING</span>, NO NEED <br />{" "}
              FOR STALLING
            </h5>
            <p className="font-medium text-base mb-7 text-[#3D5C5A]">
              Want more fun camping, join our <br /> community to get friends to
              camp <br />
              together feel the sensation
            </p>
            <a href="https://t.me/+U8gsU0ll3cE5MTc1">
              <ButtonJoin />
            </a>
          </div>
          <div>
            <img src={Community} alt="Gambar Community" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WithRouter(HomePage);