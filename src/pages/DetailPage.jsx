import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import { ButtonBookNowDetails } from "components/Button";
import ImageDetail from "assets/img-detail.svg";

const DetailPage = () => {
  return (
    <>
      <Helmet>
        <title>Detail | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <Layout>
        <section className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={ImageDetail}
                alt=""
                className="max-w-xl h-[515px] w-[560px] rounded-lg mt-20 mb-44 mr-20"
              />
            </div>
            <div className="justify-center mt-32">
              <h1 className="font-semibold text-3xl text-secondary mb-2">
                Camping Tent
              </h1>
              <h2 className="text-secondary text-2xl font-semibold mb-5">
                <span className="text-primary">Rp </span>100K
                <span className="text-xl">/day</span>
              </h2>
              <ButtonBookNowDetails />
              <div className="mt-8">
                <h5 className="text-xl font-semibold text-secondary">
                  Description
                </h5>
                <p className="text-lg font-normal text-secondary mt-3">
                  Keadaan tenda sudah bersih dan siap pakai dengan berat satuan
                  sekitar 600 gram, kapasitas tenda sekitar 5-6 orang.
                  <br />
                  <br /># Warning
                  <br />
                  Mohon saat mengembalikan tenda dalam bersih dan baik-baik
                  saja, semua fitur tenda harus kembali secara keseluruhan. Jika
                  tidak maka akan dikenakan biaya denda ganti rugi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(DetailPage);
