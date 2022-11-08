import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WithRouter } from "utils/Navigation";
import { apiRequest } from "utils/apiRequest";
import { useDispatch } from "react-redux";
import { handleAuth } from "utils/redux/reducers/reducer";
import { useCookies } from "react-cookie";

import Hero from "components/Hero";
import Layout from "components/Layout";
import { CardProduct } from "components/CardProduct";
import { ButtonJoin } from "components/Button";
import { BsPeopleFill } from "react-icons/bs";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Community from "assets/img-community.png";

const HomePage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, removeCookies] = useCookies();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    apiRequest("product", "get", {})
      .then((res) => {
        const results = res.data;
        setData(results);
      })
      .catch((err) => {
        const { data } = err.response;
        if ([401, 403].includes(data.code)) {
          removeCookies("token");
          dispatch(handleAuth(false));
          navigate("/login");
        }
        alert(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div>
        <Hero />
      </div>

      <div>
        <header>
          <h5 className="font-bold text-[32px] text-start text-secondary py-7 mx-20">
            FIND <span className="text-primary">POPULAR</span> RENTAL PRODUCTS
          </h5>
        </header>
      </div>

      <section className="mb-7 w-ful flex mx-3 md:mx-16 lg:mx-20 xl:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-9">
          <>
            {data.map((data) => (
              <CardProduct
                key={data.id_product}
                img={data.product_picture}
                name={data.product_name}
                price={data.rent_price}
                onDetail={() => props.navigate(`/detail/${data.id_product}`)}
              />
            ))}
          </>
        </div>
      </section>

      <div className="flex justify-end mx-10 md:mx-10 lg:mx-20 2xl:mx-20 gap-8 py-5">
        <button className="w-14 h-14 rounded bg-none border-2 border-primary place-content-center grid content-center">
          <HiArrowLeft className="text-primary text-2xl" />
        </button>
        <button className="w-14 h-14 rounded bg-none border-2 border-primary place-content-center grid content-center">
          <HiArrowRight className="text-primary text-2xl" />
        </button>
      </div>

      <section className="bg-secondary py-5">
        <main className="max-w-7xl mx-auto grid md:grid-flow-col gap-4">
          <aside className="md:grid-col-span-1 py-24">
            <div className="font-bold text-3xl text-white mb-3">
              <h5>
                THE MOST{" "}
                <span className="text-primary">
                  BEAUTIFUL <br />{" "}
                </span>
                CLIMBING ON MOUNTAIN
              </h5>
            </div>
            <p className="text-sm text-white font-light">
              The following is real-time climber data and <br />a comparison of
              visitors to Mount Gede
            </p>
          </aside>

          <article className="md:grid-col-span-2 py-28 items-center">
            <div className="flex flex-wrap items-center">
              <div className="text-white flex items-center justify-center font-medium text-sm md:justify-start">
                <div className="bg-[#FEF3EB] p-4 rounded-lg">
                  <BsPeopleFill className="text-primary text-4xl" />
                </div>
                <p className="font-bold text-xl ml-3">
                  230 <br /> IS CLIMBERS
                </p>
              </div>
              <div className="text-white flex items-center justify-center font-medium text-sm md:justify-start md:ml-0 lg:ml-10 xl:ml-10 sm:ml-0 ml-0">
                <div className="bg-[#FEF3EB] p-4 rounded-lg">
                  <BsPeopleFill className="text-primary text-4xl" />
                </div>
                <p className="font-bold text-xl ml-3">
                  140 <br /> MALE CLIMBER
                </p>
              </div>
              <div className="text-white flex items-center justify-center font-medium text-sm md:justify-start md:ml-0 lg:ml-10 xl:ml-10 sm:ml-0 ml-0">
                <div className="bg-[#FEF3EB] p-4 rounded-lg">
                  <BsPeopleFill className="text-primary text-4xl" />
                </div>
                <p className="font-bold text-xl ml-3">
                  90 <br /> FEMALE CLIMBER
                </p>
              </div>
            </div>
          </article>
        </main>
      </section>

      <section className="mx-20 mt-24 mb-36">
        <div className="flex justify-between">
          <div>
            <h5 className="font-bold text-[32px] mb-4">
              COMMUNITY SERVICE <br />
              <span className="text-primary">IS CALLING</span>, NO NEED <br />
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
            <img
              className="w-[456px] h-[310] hidden md:hidden lg:flex xl:flex"
              src={Community}
              alt="Gambar Community"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WithRouter(HomePage);
