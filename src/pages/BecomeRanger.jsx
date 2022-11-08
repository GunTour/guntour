import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Background from "assets/header-ranger.jpg";
import {
  InputFullNameRangers,
  InputPhoneNumber,
  InputPlaceDateBirth,
  InputGender,
  InputAddress,
} from "components/Input";
import { ButtonCancel, ButtonSubmitData } from "components/Button";

const BecomeRanger = () => {
  return (
    <>
      <Helmet>
        <title>Become Ranger | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <Layout>
        <header>
          <img className="w-full" src={Background} alt="Background" />
        </header>

        <main className="grid grid-cols-1 mx-20 py-20">
          <section className="grid grid-flow-row">
            <h5 className="font-semibold text-xl text-secondary">
              Please Fill In The Data Completely
            </h5>
            <div className="divider" />
            <p className="font-normal text-lg text-secondary pb-2">Full Name</p>
            <InputFullNameRangers />
            <p className="font-normal text-lg text-secondary py-2">
              Phone Number
            </p>
            <InputPhoneNumber />
            <p className="font-normal text-lg text-secondary py-2">
              Place & Date of Birth
            </p>
            <InputPlaceDateBirth />
            <p className="font-normal text-lg text-secondary py-2">Gender</p>
            <InputGender />
            <p className="font-normal text-lg text-secondary py-2">Address</p>
            <InputAddress />
            <p className="font-normal text-lg text-secondary py-2">
              Supporting documents
            </p>
            <input type="file" className="file-input" />
            <p className="font-light text-sm text-[#A3A3A3] py-2">
              *Dokumen pendukung seperti lamaran pengajuan pekerjaan secara
              lengkap berbentuk pdf
            </p>
            <p className="font-light text-sm text-[#A3A3A3]">
              *Proses seleksi tidak dikenakan biaya
            </p>
            <div className="divider" />
            <div>
              <ButtonSubmitData />
            </div>
            <div className="pt-2">
              <ButtonCancel />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default WithRouter(BecomeRanger);
