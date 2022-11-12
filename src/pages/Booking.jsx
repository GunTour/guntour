import React, { useState } from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { setBooking } from "utils/redux/reducers/reducer";
import { useNavigate } from "react-router-dom";

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

import Swal from "sweetalert2";

const Booking = () => {
  const booking = useSelector((state) => state.data.booking);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [entrance, setEntrance] = useState("");
  const [idRanger, setidRanger] = useState("");
  const [person, setPerson] = useState(0);

  function handleRemove(bookingNow) {
    let filtered = booking.filter(({ id_product }) => {
      return id_product !== bookingNow.id_product;
    });
    filtered.join(" - ");
    const newList = JSON.stringify(filtered);
    localStorage.setItem("BookingNow", newList);
    dispatch(setBooking(filtered));
    localStorage.removeItem(filtered);
    Swal.fire("Remove Success!");
  }

  function validasiHandleBookedNow(product, isNavigate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const grossAmount = document.getElementById("text-grossamount").value;
    const selRanger = document.getElementById("categoryRanger");
    const ranger_name = selRanger.options[selRanger.selectedIndex].text;
    const selPerson = document.getElementById("categoryPerson");
    const ticket = selPerson.options[selPerson.selectedIndex].text;
    const diffDays = Math.round(
      Math.abs((new Date(dateEnd) - new Date(dateStart)) / oneDay)
    );

    var formBooking = [
      {
        date_start: dateStart,
        date_end: dateEnd,
        entrance: entrance,
        ticket: person,
        product,
        id_ranger: idRanger,
        ranger_name: ranger_name,
        gross_amount: grossAmount * diffDays + parseInt(ticket) * 30000,
      },
    ];

    if (
      dateStart.length === 0 ||
      dateEnd.length === 0 ||
      entrance.length === 0
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Data cannot be empty !",
        showConfirmButton: true,
      });
      return;
    }

    localStorage.removeItem("ConfirmBook");
    const temp = JSON.stringify(formBooking);
    localStorage.setItem("ConfirmBook", temp);
    if (isNavigate) {
      Swal.fire({
        title: "Are you sure the data is correct?",
        text: "If you are not sure, please press cancel!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/confirm");
        }
      });
      return;
    }
  }

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
          <>
            <article className="md:grid-col-span-2">
              <section className="grid md:grid-rows-1 gap-2">
                <p className="font-medium text-xl text-secondary">From Date</p>
                <InputDate
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
                <p className="font-medium text-xl text-secondary">Entrance</p>
                <InputSelectEntrance
                  value={entrance}
                  onChange={(e) => setEntrance(e.target.value)}
                />
                <p className="font-medium text-xl text-secondary">
                  Ranger
                  <span className="text-primary text-xs"> ( Optional )</span>
                </p>
                <InputSelectRanger
                  value={idRanger}
                  onChange={(e) => {
                    setidRanger(e.target.value);
                  }}
                />
              </section>
            </article>
            <article className="md:grid-col-span-2">
              <section className="grid md:grid-rows-1 gap-2">
                <p className="font-medium text-xl text-secondary">To Date</p>
                <InputDate
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
                <p className="font-medium text-xl text-secondary">
                  Number of Person{" "}
                  <span className="text-primary text-xs">
                    {" "}
                    ( Tickets cannot be empty )
                  </span>
                </p>
                <InputSelectPerson
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                />
              </section>
            </article>
          </>
        </main>

        <h1 className="text-center font-bold text-[32px] text-secondary mb-3">
          YOUR <span className="text-primary">PRODUCTS</span> BOOKING
        </h1>
        <p className="text-center font-medium text-base text-secondary">
          This Product here are optional
        </p>

        <section className="grid grid-rows-1 grid-flow-col px-20 my-5">
          <div>
            {booking.map((data) => (
              <CardBooking
                idProduct={data.id_product}
                key={data.id_product}
                images={data.product_picture}
                name={data.product_name}
                price={data.rent_price}
                removeBooking={() => {
                  handleRemove(data);
                  validasiHandleBookedNow(booking, false);
                }}
                sub={-1}
                add={1}
              />
            ))}
            <ButtonBooked
              onClick={() => {
                validasiHandleBookedNow(booking, true);
              }}
            />
            <input
              value={booking
                .map((data) => data.rent_price)
                .reduce((acc, curr) => acc + parseInt(curr, 10), 0)}
              type="text"
              id="text-grossamount"
              className="bg-lime-500"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(Booking);
