import React from "react";
import { WithRouter } from "utils/Navigation";

import Background from "assets/bgabout.svg";
import Sejarah from "assets/sejarah.jpg";
import Visi from "assets/visi.jpg";
import { FaHiking, FaSignature } from "react-icons/fa";
import { GiCampingTent, GiHills } from "react-icons/gi";
import Layout from "components/Layout";
import { HiMenuAlt1 } from "react-icons/hi";

const About = () => {
  return (
    <>
      <Layout>
        <section className="carousel w-full">
          <figure className="carousel-item relative w-full">
            <img src={Background} className="w-full" alt="img1" />
          </figure>
        </section>

        <main className="grid md:grid-flow-col gap-4 py-5">
          <article className="md:grid-col-span-2 mx-10">
            <h1 className="font-bold text-3xl text-secondary">
              SEJARAH GUNUNG
            </h1>

            <section className="grid md:grid-rows-2 gap-4 mt-4">
              <p className="font-normal text-justify text-lg text-secondary">
                Gunung Gede pangrango adalah salah satu gunung yang memiliki
                status aktif, namun masih dalam level normal, tercatat gunung
                gede pangrango aktif sejak tahun 1957. Gunung gede pangrango
                meletus pada tahun 1747/1748, letusan tersebut menyebabkan dua
                aliran lava bergerak dari kawah lanang.
              </p>

              <a
                href="https://gedepangrango.org/sejarah/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  id="selengkapnya"
                  className="cursor-pointer font-medium text-base text-center justify-center py-3 px-8 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
                >
                  <span>Selengkapnya</span>
                </button>
              </a>
            </section>
          </article>

          <aside className="md:grid-col-span-1">
            <img
              className="w-[560px] h-[320px] rounded-lg "
              src={Sejarah}
              alt="sejarah"
            />
          </aside>
        </main>

        <main className="grid md:grid-flow-col gap-4 py-5">
          <aside className="md:grid-col-span-1">
            <img className="w-[550px] h-[260px]" src={Visi} alt="visi" />
          </aside>

          <article className="md:grid-col-span-2 mx-10 text-right">
            <h1 className="font-bold mr-24 text-3xl text-secondary mx-10">
              VISI DAN MISI
            </h1>

            <section className="grid md:grid-rows-1 gap-4 mt-4">
              <p className="font-normal text-justify text-lg text-secondary">
                Secara geografis Taman Nasional Gunung Gede Pangrango (TNGGP)
                terletak antara 106º51`-107º02`BT dan 6º41`-6º51` LS. Secara
                administrastif Taman Nasional ini termasuk dalam wilayah tiga
                Kabupaten di Provinsi Jawa Barat, yaitu Kabupaten Bogor,
                Kabupaten Sukabumi dan Kabupaten Cianjur dengan total luasan
                24.270,80 Ha
              </p>
            </section>
          </article>
        </main>

        <h1 className="font-bold text-3xl text-secondary text-center py-5">
          PESONA
          <span className="text-primary"> GUNUNG </span>
          GEDE
        </h1>

        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="grid grid-flow-row justify-center">
              <GiCampingTent className="w-[160px] h-[130px] text-[#494949]" />
              <p className="font-semibold text-2xl text-secondary text-center py-5">
                Camping
              </p>
            </div>
            <div className="grid grid-flow-row justify-center">
              <GiHills className="w-[160px] h-[130px] text-[#494949]" />
              <p className="font-semibold text-2xl text-secondary text-center py-5">
                Curug
              </p>
            </div>
            <div className="grid grid-flow-row justify-center">
              <FaHiking className="w-[160px] h-[130px] text-[#494949]" />
              <p className="font-semibold text-2xl text-secondary text-center py-5">
                Hiking
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(About);
