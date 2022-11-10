import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";

import Layout from "components/Layout";
import { ButtonCancelBooking, ButtonConfirmBooking } from "components/Button";

const ConfirmBooking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ConfirmBook"));
    if (data) {
      setData(data);
    }
  }, []);

  return (
    <Layout>
      <main className="grid grid-cols-1 mx-20 py-20">
        {data.map((data) => (
          <section className="grid grid-flow-row bg-white py-7 px-8 rounded-lg">
            <h5 className="font-semibold text-xl text-secondary">
              Payment Description
            </h5>
            <div className="divider" />
            <p className="font-medium text-lg text-secondary">
              Ticket Quantity: {data.ticket}
            </p>
            <p
              className="font-medium text-lg text-secondary py-2"
              key={data.id_product}
            >
              Items Booking:{/* cara mengambil data didalam data */}
              {data.product.map((item) => " " + item.product_name).join(",")}
            </p>
            <p className="font-medium text-lg text-secondary pb-2">
              Rangers: {data.ranger_name}
            </p>
            <p className="font-medium text-lg text-secondary">
              Total Price: Rp
              {/* {data.gross_amount} */}
              {" " + data.gross_amount}
            </p>
            <div className="divider" />
            <Link to="/history">
              <ButtonConfirmBooking />
            </Link>
            <div className="pt-2">
              <Link to="/booking">
                <ButtonCancelBooking />
              </Link>
            </div>
          </section>
        ))}
      </main>
    </Layout>
  );
};

export default WithRouter(ConfirmBooking);
