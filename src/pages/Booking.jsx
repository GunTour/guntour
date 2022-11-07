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

        <main className="mx-auto grid md:grid-flow-col gap-4 px-20 my-10">
          <article className="md:grid-col-span-2">
            <section className="grid md:grid-rows-1 gap-2">
              <p className="font-medium text-xl text-secondary">From Date</p>
              <InputDate />
              <p className="font-medium text-xl text-secondary">Entrance</p>
              <InputSelectEntrance />
              <p className="font-medium text-xl text-secondary">Rangers</p>
              <InputSelectRanger />
            </section>
          </article>

          <article className="md:grid-col-span-2">
            <section className="grid md:grid-rows-1 gap-2">
              <p className="font-medium text-xl text-secondary">To Date</p>
              <InputDate />
              <p className="font-medium text-xl text-secondary">
                Number of Person
              </p>
              <InputSelectPerson />
            </section>
          </article>
        </main>

        <h1 className="text-center font-bold text-[32px] text-secondary mb-3">
          YOUR <span className="text-primary">PRODUCTS</span> BOOKING
        </h1>
        <p className="text-center font-medium text-base text-secondary">
          This Product here are optional
        </p>

        <section className="grid grid-rows-2 grid-flow-col px-20 my-10 py-10">
          <div>
            <CardBooking />
          </div>
          <div className="py-5">
            <ButtonBooked />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(Booking);
