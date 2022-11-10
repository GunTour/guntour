import React, { useState } from "react";
import { WithRouter } from "utils/Navigation";
import { apiRequest } from "utils/apiRequest";
import { Helmet } from "react-helmet";

import Swal from "sweetalert2";
import Layout from "components/Layout";
import Background from "assets/header-ranger.jpg";
import {
  InputFullNameRangers,
  InputPhoneNumber,
  InputPlaceDateBirth,
  InputGender,
  InputAddress,
} from "components/Input";
import { ButtonCancelRanger, ButtonSubmitData } from "components/Button";

const BecomeRanger = () => {
  const [submit, setSubmit] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in submit) {
      formData.append(key, submit[key]);
    }
    apiRequest("ranger", "post", submit, "multipart/form-data")
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Data added successfully",
        });
        setSubmit({});
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "There is an error please check again",
        });
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...submit };
    temp[key] = value;
    setSubmit(temp);
  };

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
          <section className="grid grid-flow-row bg-white py-7 px-8 rounded-lg">
            <h5 className="font-semibold text-xl text-secondary">
              Please Fill In The Data Completely
            </h5>
            <div className="divider" />
            <p className="font-normal text-lg text-secondary pb-3">Full Name</p>
            <InputFullNameRangers
              value={submit.fullname}
              onChange={(e) => handleChange(e.target.value, "fullname")}
            />
            <p className="font-normal text-lg text-secondary py-3">
              Phone Number
            </p>
            <InputPhoneNumber
              value={submit.phone}
              onChange={(e) => handleChange(e.target.value, "phone")}
            />
            <p className="font-normal text-lg text-secondary py-3">
              Place & Date of Birth
            </p>
            <InputPlaceDateBirth
              value={submit.ttl}
              onChange={(e) => handleChange(e.target.value, "ttl")}
            />
            <p className="font-normal text-lg text-secondary py-3">Gender</p>
            <InputGender
              value={submit.gender}
              onChange={(e) => handleChange(e.target.value, "gender")}
            />
            <p className="font-normal text-lg text-secondary py-3">Address</p>
            <InputAddress
              value={submit.address}
              onChange={(e) => handleChange(e.target.value, "address")}
            />
            <p className="font-normal text-lg text-secondary py-3">
              Supporting documents
            </p>
            <input
              onChange={(e) =>
                handleChange(e.target.files[0], "docs")
              }
              type="file"
              className="file-input"
            />
            <p className="font-light text-sm text-[#A3A3A3] py-2">
              *Dokumen pendukung seperti lamaran pengajuan pekerjaan secara
              lengkap berbentuk pdf
            </p>
            <p className="font-light text-sm text-[#A3A3A3]">
              *Proses seleksi tidak dikenakan biaya
            </p>
            <div className="divider" />
            <div>
              <ButtonSubmitData onClick={() => handleSubmit()} />
            </div>
            <div className="mt-6">
              <ButtonCancelRanger />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default WithRouter(BecomeRanger);
