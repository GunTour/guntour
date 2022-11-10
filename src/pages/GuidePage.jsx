import React from "react";

import Layout from "components/LayoutAnonym";
import {
  CardClimber,
  CardParent,
  CardHealth,
  CardGarbage,
} from "components/CardProduct";

import imgguide from "assets/header-guide.jpg";
import imgmap from "assets/img-map.jpg";

const GuidePage = () => {
  return (
    <>
      <Layout>
        <section className="carousel w-full">
          <figure className="carousel-item relative w-full">
            <img src={imgguide} className="w-full" alt="img1" />
          </figure>
        </section>

        <section className="mx-20">
          <p className="text-secondary font-bold text-[32px] py-5">
            MUST DO <span className="text-primary">FOR</span> CLIMBERS
          </p>
          <p className="font-medium text-lg text-secondary">
            Climbers or groups of climbers while in the climbing area must meet
            the provisions or do the following:
          </p>
          <article className="pt-5">
            <ol className="list-decimal list-inside font-light text-lg">
              <li>
                In good health at the time of climbing (no history of dangerous
                diseases such as asthma, high blood pressure, heart disease,{" "}
                <br /> or other diseases under the supervision of a doctor)
              </li>
              <li>
                Enter the hiking trail between 06.00 and 18.00 WIB and climb on
                a predetermined path or official route, namely the Cibodas Path,
                <br />
                Gunung Putri, and Selabintana.
              </li>
              <li>
                Bring/use climbing equipment that meets safety and comfort
                requirements, namely:
              </li>
              <ul className="list-disc list-inside font-light text-lg">
                <li>Waterproof tent</li>
                <li>Backpack/carrier</li>
                <li>Mattresses/beds</li>
                <li>Sleeping bag</li>
                <li>Gloves</li>
                <li>Socks that at least cover the ankles</li>
                <li>Pants (recommended not to use jeans)</li>
                <li>Mountain shoes or cat shoes</li>
                <li>Raincoat</li>
                <li>Flashlight</li>
                <li>Cooking utensils and food supplies</li>
                <li>Personal and group medicine</li>
                <li>Bring a trash bag</li>
              </ul>
              <li>Fill in the luggage form that generates waste.</li>
              <li>
                Doing a self-evacuation of a sick colleague before getting help
                from the officers.
              </li>
              <li>
                Prioritizing treatment for women who are menstruating,
                especially immediately bringing down the victim.
              </li>
              <li>Ticket price Rp. 30.000 / person (maximum 2 days)</li>
            </ol>
          </article>
        </section>

        <section className="mx-20 mt-20">
          <p className="text-secondary font-bold text-3xl py-5">
            IMPORTANT <span className="text-primary">FILE FOR</span> CLIMBERS
          </p>
          <p className="text-secondary font-light textbase pb-5">
            The file below must be downloaded and printed, and must be attached
            at the entrance post according to what has been selected
          </p>
        </section>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex justify-center text-6xl rounded-xl p-6 bg-white">
              <CardClimber />
            </div>
            <div className="flex justify-center text-6xl rounded-xl p-6 bg-white">
              <p className="font-medium text-secondary text-lg">
                <CardParent />
              </p>
            </div>
            <div className="flex justify-center text-6xl rounded-xl p-6 bg-white">
              <p className="font-medium text-secondary text-lg">
                <CardHealth />
              </p>
            </div>
            <div className="flex justify-center text-6xl rounded-xl p-6 bg-white">
              <p className="font-medium text-secondary text-lg">
                <CardGarbage />
              </p>
            </div>
          </div>
        </div>

        <section className="mx-20 mt-14">
          <p className="text-secondary font-bold text-3xl py-5">
            MOUNT <span className="text-primary">GEDE PANGRANGO</span> MAP
          </p>
          <figure className="mb-40 mt-6">
            <img
              src={imgmap}
              alt="imgmap"
              className="object-contain h-[1774] w-[1280] md:object-scale-down pb-5"
            />
          </figure>
        </section>
      </Layout>
    </>
  );
};

export default GuidePage;
