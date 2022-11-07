import React from "react";
import { WithRouter } from "utils/Navigation";

import Background from "assets/bgabout.svg";
import Sejarah from "assets/sejarah.jpg";
import Visi from "assets/visi.jpg";
import { FaHiking } from "react-icons/fa";
import { GiCampingTent, GiHills } from "react-icons/gi"
import Layout from "components/Layout";

const About = () => {
  return (
    <div>
      <Layout>
      <header>
        <img className="w-full" src={Background} alt="Background" />
      </header>
      <div>
        <div className="flex mt-28">
            <div className="grow h-14 ml-20">
              <div className="font-bold text-3xl text-secondary">
                SEJARAH GUNUNG
              </div>
              <div className="font-normal mt-10 text-justify w-[555px] h-[168px] text-lg text-secondary">
                Gunung Gede pangrango adalah salah satu gunung yang memiliki
                status aktif, namun masih dalam level normal, tercatat gunung
                gede pangrango aktif sejak tahun 1957. Gunung gede pangrango
                meletus pada tahun 1747/1748, letusan tersebut menyebabkan dua
                aliran lava bergerak dari kawah lanang.
              </div>
              <div>
                <a
                  href="https://gedepangrango.org/sejarah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    id="selengkapnya"
                    className="login font-medium text-base text-center justify-center py-3 px-8 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
                  >
                    <span>Selengkapnya</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="grow h-14"></div>
            <div className="grow h-14">
                <img className="w-[560px] h-[320px] rounded-lg " src={Sejarah} alt="sejarah" />
            </div>
          </div>

        <div className="flex mt-96 mb-20">
          <div className="grow h-14 ml-20">
            <img className="w-[550px] h-[260px]" src={Visi} alt="visi" />
          </div>
          <div className="grow h-14"></div>
          <div className="grow h-[237px] w-[555px] text-secondary">
            <div className="font-bold mr-24 text-3xl text-secondary text-right">
              VISI DAN MISI
            </div>
            <div className="font-normal mt-10 text-justify w-[555px] h-[171px] text-lg text-secondary">
              Secara geografis Taman Nasional Gunung Gede Pangrango (TNGGP)
              terletak antara 106º51`-107º02`BT dan 6º41`-6º51` LS. Secara
              administrastif Taman Nasional ini termasuk dalam wilayah tiga
              Kabupaten di Provinsi Jawa Barat, yaitu Kabupaten Bogor, Kabupaten
              Sukabumi dan Kabupaten Cianjur dengan total luasan 24.270,80 Ha
            </div>
          </div>
        </div>

          <div className="font-bold text-3xl text-secondary text-center mt-40">PESONA
            <span className="text-primary"> GUNUNG </span>
             GEDE
          </div>
        <div className="flex mb-80">
          <div className="grow h-14">
            <div>
                <GiCampingTent className="w-[160px] h-[130px] text-[#494949] mr-4 ml-56 mt-20"/>
            </div>
            <div className="font-semibold text-2xl text-secondary ml-56">Camping</div>
          </div>
          <div className="grow h-14">
            <div>
                <GiHills className="w-[160px] h-[130px] text-[#494949] mr-4 mt-20"/>
            </div>
          <div className="font-semibold text-2xl text-secondary ml-10">Curug</div>
          </div>
          <div className="grow h-14">
            <div>
            <FaHiking className="w-[160px] h-[130px] text-[#494949] mr-4 mt-20"/>
            </div>
          <div className="font-semibold text-2xl text-secondary ml-10">Hiking</div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default WithRouter(About);
