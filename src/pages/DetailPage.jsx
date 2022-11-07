import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { apiRequest } from "utils/apiRequest";

import Layout from "components/Layout";
import { ButtonBookNowDetails } from "components/Button";

const DetailPage = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    apiRequest(`product/${props.params.id}`, "get", {})
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <h2 id="loading" className="text-secondary font-medium text-lg bg-white text-center mt-80">
        Loading Content...
      </h2>
    );
  }

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
                src={data.product_picture}
                alt={data.product_name}
                className="max-w-xl h-[515px] w-[560px] rounded-lg mt-20 mb-44 mr-20"
              />
            </div>
            <div className="justify-center mt-32">
              <h1 className="font-semibold text-3xl text-secondary mb-2">
                {data.product_name}
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
                  {data.detail}
                </p>
                <h5 className="text-xl font-semibold text-secondary mt-6">
                  Warning
                </h5>
                <p className="text-lg font-normal text-secondary mt-3">
                  {data.note}
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
