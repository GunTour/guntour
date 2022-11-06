import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Background from "assets/header-booking.jpg";
import {
  InputDate,
  InputSelectEntrance,
  InputSelectPerson,
  InputSelectRanger,
} from "components/Input";
import { CardBooking } from "components/CardProduct";
import { ButtonBooked } from "components/Button";

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Booking | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <Layout>
        <header>
          <img className="w-full" src={Background} alt="Background" />
        </header>

        <section className="mx-48 mb-32">
          <div className="my-16">
            <div className="flex justify-between mb-9">
              <div>
                <p className="font-medium text-xl mb-4 text-secondary">
                  From Date
                </p>
                <InputDate />
              </div>
              <div>
                <p className="font-medium text-xl mb-4 text-secondary">
                  To Date
                </p>
                <InputDate />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-xl mb-4 text-secondary">
                  Entrance
                </p>
                <InputSelectEntrance />
              </div>
              <div>
                <p className="font-medium text-xl mb-4 text-secondary">
                  Number of Person
                </p>
                <InputSelectPerson />
              </div>
            </div>
            <div>
              <p className="font-medium text-xl mt-9 mb-4 text-secondary">
                Rangers
              </p>
              <InputSelectRanger />
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-center font-bold text-[32px] text-secondary mb-3">
              YOUR <span className="text-primary">PRODUCTS</span> BOOKING
            </h1>
            <p className="text-center font-medium text-base text-secondary mb-14">
              This Product here are optional
            </p>
          </div>

          {/* Card Booking */}
          <div>
            <CardBooking />
          </div>

          {/* Button Booked Now */}
          <div className="mt-14">
            <ButtonBooked />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(Booking);
