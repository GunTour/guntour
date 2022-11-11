import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { apiRequest } from "utils/apiRequest";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import { CardOrderBooking } from "components/CardProduct";
import Background from "assets/header-history.jpg";

const OrderHistory = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    handleBooking();
  }, []);

  // const body = {
  //   id_booking: data.id_booking,
  //   gross_amount: data.gross_amount,
  //   status: data.status,
  //   link: data.link,
  // }

  const handleBooking = () => {
    apiRequest("booking", "get", {})
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        alert("ini alert histori" + err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <h2
        id="loading"
        className="text-secondary font-medium text-lg bg-white text-center mt-80"
      >
        Loading Content...
      </h2>
    );
  }

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

        {/* <div className="mx-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex justify-center"> */}
        <>
          {data.map((data) => (
            <CardOrderBooking
              idBooking={data.id_booking}
              priceBooking={data.gross_amount}
              statusBooking={data.status}
              payBooking={data.link}
            />
          ))}
        </>
        {/* </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default WithRouter(OrderHistory);
