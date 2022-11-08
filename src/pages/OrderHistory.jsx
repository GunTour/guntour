import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import {
  CardOrderCancel,
  CardOrderProgress,
  CardOrderSuccess,
} from "components/CardProduct";
import Background from "assets/header-history.jpg";

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

        <div className="mx-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex justify-center">
              <CardOrderProgress />
            </div>
            <div className="flex justify-center">
              <CardOrderCancel />
            </div>
            <div className="flex justify-center">
              <CardOrderSuccess />
            </div>
            <div className="flex justify-center">
              <CardOrderProgress />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(OrderHistory);
