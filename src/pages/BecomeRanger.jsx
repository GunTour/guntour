import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Background from "assets/header-ranger.svg";
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

        <section className="bg-white mt-14 mx-48 rounded-lg py-7 px-8 mb-52">
          <h5 className="font-semibold text-xl text-secondary">
            Please Fill In The Data Completely
          </h5>
          <div className="divider m-0 mt-4" />
          <div>
            <p className="font-normal text-lg text-secondary mt-7 mb-3">
              Full Name
            </p>
            <InputFullNameRangers />
          </div>
          <div>
            <p className="font-normal text-lg text-secondary mt-7 mb-3">
              Phone Number
            </p>
            <InputPhoneNumber />
          </div>
          <div>
            <p className="font-normal text-lg text-secondary mt-7 mb-3">
              Place & Date of Birth
            </p>
            <InputPlaceDateBirth />
          </div>
          <div>
            <p className="font-normal text-lg text-secondary mt-7 mb-3">
              Gender
            </p>
            <InputGender />
          </div>
          <div>
            <p className="font-normal text-lg text-secondary mt-7 mb-3">
              Gender
            </p>
            <InputAddress />
          </div>
          <div>
            <p className="font-normal text-lg text-secondary mt-7 mb-3">
              Supporting documents
            </p>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
          <div>
            <p className="font-light text-sm text-[#A3A3A3] mb-2 mt-3">
              *Dokumen pendukung seperti lamaran pengajuan pekerjaan secara
              lengkap berbentuk pdf
            </p>
            <p className="font-light text-sm text-[#A3A3A3] mb-7">
              *Proses seleksi tidak dikenakan biaya
            </p>
          </div>
          <div className="divider m-0" />
          <div className="mt-9 mb-6">
            <ButtonSubmitData />
          </div>
          <ButtonCancel />
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(BecomeRanger);
