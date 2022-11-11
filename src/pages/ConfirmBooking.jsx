import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "utils/apiRequest";

import Swal from "sweetalert2";

import Layout from "components/Layout";
import { ButtonCancelBooking, ButtonConfirmBooking } from "components/Button";

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ConfirmBook"));
    if (data) {
      setData(data);
    }
  }, []);

  const handleConfirmBooking = () => {
    let data = JSON.parse(localStorage.getItem("ConfirmBook"));
    const body = {
      date_start: data[0].date_start,
      date_end: data[0].date_end,
      entrance: data[0].entrance,
      ticket: parseInt(data[0].ticket),
      product: data[0].product,
      id_ranger: parseInt(data[0].id_ranger),
      ranger_name: data[0].ranger_name,
      gross_amount: data[0].gross_amount,
    };

    apiRequest("booking", "post", body);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Confirmation Successful",
      showConfirmButton: false,
      timer: 2000,
    })
      .then((res) => {
        const data = res.data;
        setData(data);
        window.localStorage.clear();
        navigate("/history");
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally((res) => {
        setLoading(false);
      });
  };

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
              Items Booking:
              {data.product.map((item) => " " + item.product_name).join(",")}
            </p>
            <p className="font-medium text-lg text-secondary pb-2">
              Rangers: {data.ranger_name}
            </p>
            <p className="font-medium text-lg text-secondary">
              Total Price: Rp
              {" " + data.gross_amount}
            </p>
            <div className="divider" />

            <ButtonConfirmBooking
              onClick={() => {
                handleConfirmBooking();
              }}
            />

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
