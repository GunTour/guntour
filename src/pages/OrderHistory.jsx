import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import {
  CardOrderCancel,
  CardOrderProgress,
  CardOrderSuccess,
} from "components/CardProduct";
import Background from "assets/header-history.svg";

const OrderHistory = () => {
  return (
    <>
      <Helmet>
        <title>Order History | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Layout>
        <header>
          <img className="w-full" src={Background} alt="Background" />
        </header>

        <section className="mt-10 mb-7 w-ful flex mx-3 md:mx-16 lg:mx-20 xl:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            <CardOrderProgress />
            <CardOrderCancel />
            <CardOrderSuccess />
            <CardOrderProgress />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(OrderHistory);
