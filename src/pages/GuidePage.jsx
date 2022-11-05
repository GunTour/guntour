import React from "react";

import LayoutAnonym from "components/LayoutAnonym";
import {
  CardClimber,
  CardParent,
  CardHealth,
  CardGarbage,
} from "components/CardProduct";

import imgguide from "assets/img-guide.svg";
import imgmap from "assets/img-map.svg";

const GuidePage = () => {
  return (
    <>
      <LayoutAnonym>
        <section className="carousel w-full">
          <div className="carousel-item relative w-full">
            <img src={imgguide} className="w-full" alt="img1" />
            <p className="absolute bottom-16 w-full items-center px-5 py-4 text-center text-white font-bold text-[32px]">
              GUIDE<span className="text-primary"> BEFORE</span> CLIMBING
            </p>
          </div>
        </section>

        <section>
          <p className="text-secondary font-bold text-[32px] pl-10 py-5">
            MUST DO <span className="text-primary">FOR</span> CLIMBERS
          </p>
          <p className="font-medium text-lg text-secondary pl-10">
            Climbers or groups of climbers while in the climbing area must meet
            the provisions or do the following:
          </p>
          <article className="pl-10 pt-5">
            <ol className="list-decimal list-inside font-light text-lg">
              <li>
                In good health at the time of climbing (no history of dangerous
                diseases such as asthma, high blood pressure, heart disease, or
                other diseases under the supervision of a doctor)
              </li>
              <li>
                Enter the hiking trail between 06.00 and 18.00 WIB and climb on
                a predetermined path or official route, namely the Cibodas Path,
                Gunung Putri, and Selabintana.
              </li>
              <li>
                Bring/use climbing equipment that meets safety and comfort
                requirements, namely:
              </li>
              <ul className="list-disc list-inside font-light text-lg pl-6">
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
            </ol>
          </article>
        </section>

        <section>
          <p className="text-secondary font-bold text-3xl pl-10 py-5">
            IMPORTANT <span className="text-primary">FILE FOR</span> CLIMBERS
          </p>
          <p className="text-secondary font-light textbase pl-10 pb-5">
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

        <section>
          <p className="text-secondary font-bold text-3xl pl-10 py-5">
            MOUNT <span className="text-primary">GEDE PANGRANGO</span> MAP
          </p>
          <figure>
            <img
              src={imgmap}
              alt="imgmap"
              className="object-contain h-[1774] w-[1280] md:object-scale-down pb-5"
            />
          </figure>
        </section>
      </LayoutAnonym>
    </>
  );
};

export default GuidePage;
