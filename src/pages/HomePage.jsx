import { CardProduct } from "components/CardProduct";
import Hero from "components/Hero";
import Layout from "components/Layout";
import { ButtonJoin } from "components/Button";
import items from "assets/items-bg.svg";
import React from "react";
import { WithRouter } from "utils/Navigation";
import { BsPeopleFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <Hero />
      </div>
      <div className="font-bold mt-20 mb-20 text-2xl ml-32">
        FIND <span className="text-primary">POPULAR</span> RENTAL PRODUCTS
      </div>
      <div className="grid grid-cols-4 gap-4 ml-16">
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
      </div>
      <div className="text-right mr-20 mt-10 mb-10">
        <button className="btn btn-outline ml-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button className="btn btn-outline ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>

      <div className="bg-[#112120] h-96">
        <div className="py-32 ml-60">
          <div className="flex">
            <div className="flex-auto w-32">
              <div className="font-bold text-3xl text-white">
                THE MOST <span className="text-primary">BEAUTIFUL</span>
                <div>CLIMBING ON MOUNTAIN</div>
              </div>
              <div className="text-sm text-white">
                The following is real-time climber data and
                <div>a comparison of visitors to Mount Gede.</div>
              </div>
            </div>

            <div className="flex-auto w-64">
              <div className="grid grid-cols-4 gap-4 py-10">
                <div className="">
                  <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
                    <BsPeopleFill className="fill-primary text-3xl mr-4" />
                    230 IS CLIMBERS
                  </p>
                </div>
                <div className="btn-outline">
                  <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
                    <BsPeopleFill className="fill-primary text-3xl mr-4" />
                    140 MALE CLIMBERS
                  </p>
                </div>
                <div className="btn-outline">
                  <p className="text-white flex items-center justify-center font-medium text-sm md:justify-start mb-6">
                    <BsPeopleFill className="fill-primary text-3xl mr-4" />
                    90 FEMALE CLIMBERS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero h-96">
        <div className="hero-content lg:flex-row-reverse">
          <figure className="">
            <img src={items} alt="items" className="rounded-xl w-72 h-48" />
          </figure>
          <div className="mr-96">
            <div className="text-3xl font-bold">
              <div>COMMUNITY SERVICE </div>
              <div>
                <span className="text-primary">IS CALLING</span>, NO NEED
                <div>FOR STALLING</div>
              </div>
            </div>
            <div>
              <p className="py-6 text-lg">
                Want more fun camping, join our
                <div>community to get friends to camp</div> together feel the
                sensation
              </p>
            </div>
            <div>
              <ButtonJoin />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WithRouter(HomePage);
