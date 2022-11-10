import React from "react";
import booking from "assets/booking.svg";
import {
  ButtonBookNow,
  ButtonPay,
  ButtonCancel,
  ButtonDownloadFile,
} from "components/Button";
import { Link } from "react-router-dom";

import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const CardProduct = (props) => {
  return (
    <section className="card w-72 bg-white">
      <figure idDetail={props.id_product} className="px-3 pt-3">
        <img
          onClick={props.onDetail}
          src={props.img}
          alt="items"
          className="rounded-xl w-72 h-48"
        />
      </figure>
      <div className="card-body px-3 py-[14px] items-left">
        <h2 className="card-title font-semibold text-2xl text-secondary">
          {props.name}
        </h2>
        <p className="font-medium text-xl">
          <span className="text-primary font-semibold text-2xl">Rp </span>
          <span className="text-secondary font-semibold text-2xl">
            {props.price}
          </span>
          <span className="text-secondary font-medium text-xl">/day</span>
        </p>
        <div id={props.idProduct} className="card-actions justify-center w-full">
          <ButtonBookNow onClick={props.handleBook} />
        </div>
      </div>
    </section>
  );
};

const CardBooking = (props) => {
  const [counter, setCounter] = React.useState(1);
  let handleCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <section className="w-full bg-white rounded-lg my-2">
      <div className="flex">
        <div>
          <img className="h-40 w-44 ml-6" src={props.images} alt="items" />
        </div>
        <div className="flex justify-between w-full pl-4">
          <div className="ml-6 mt-6">
            <h2 className="card-title font-semibold text-2xl text-secondary">
              {props.name}
            </h2>
            <p className="font-medium text-xl">
              <span className="text-primary font-semibold text-xl">Rp </span>
              <span className="text-secondary font-semibold text-xl">
                {props.price}
              </span>
              <span className="text-secondary font-medium text-lg">/day</span>
            </p>
            <div className="flex mt-4">
              <button>
                <AiFillMinusCircle
                  className="mr-3.5 rounded-full bg-primary text-3xl text-white mt-1"
                  onClick={() => handleCounter(props.sub)}
                />
              </button>
              <p className="text-lg font-medium w-auto text-center mt-1.5">
                {counter}
              </p>
              <button>
                <AiFillPlusCircle
                  className="text-primary text-3xl mt-1 ml-3.5"
                  onClick={() => handleCounter(props.add)}
                />
              </button>
            </div>
          </div>
          <div className="mr-6 text-right">
            <button
              className="text-primary mt-28"
              onClick={props.removeBooking}
            >
              Remove Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardOrderProgress = () => {
  return (
    <section className="card w-72 bg-white ">
      <figure className="px-3 pt-3">
        <img src={booking} alt="booking" className="rounded-xl w-72 h-48" />
      </figure>
      <div className="card-body items-left text-left px-4 py-[14px]">
        <h2 className="card-title font-semibold text-2xl text-secondary">
          Your Booking #3
        </h2>
        <p className="font-medium text-xl text-secondary">Rp. 198K</p>
        <p className="py-1 px-2 w-32 h-9 rounded-lg bg-[#FFF1CC] text-primary text-center font-medium text-base">
          On Progress
        </p>
        <div className="card-actions justify-center">
          <ButtonPay />
          <ButtonCancel />
        </div>
      </div>
    </section>
  );
};

const CardOrderBooking = (props) => {
  return (
    <section className="card w-72 bg-white ">
      <figure className="px-3 pt-3">
        <img src={booking} alt="booking" className="rounded-xl w-72 h-48" />
      </figure>
      <div className="card-body items-left text-left px-4 py-[14px]">
        <h2 className="card-title font-semibold text-2xl text-secondary">
          Your Booking #{props.idBooking}
        </h2>
        <p className="font-medium text-xl text-secondary">
          Rp. {props.priceBooking}
        </p>
        <p className="py-1 px-2 w-32 h-9 rounded-lg bg-[#FFF1CC] text-primary text-center font-medium text-base">
          {props.statusBooking}
        </p>
        <div className="card-actions justify-center">
          <a href={props.payBooking}>
            <button className="login font-medium text-center justify-center h-[48px] w-[265px] px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
              Pay Now
            </button>
          </a>
          <div>
            <button
              id="cancel"
              className="login font-normal text-center justify-center h-[48px] w-[265px] rounded-lg border border-slate text-slate-400 transform active:scale-95 transition-transform flex items-center"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardOrderCancel = () => {
  return (
    <section className="card w-72 bg-white ">
      <figure className="px-3 pt-3">
        <img src={booking} alt="booking" className="rounded-xl w-72 h-48" />
      </figure>
      <div className="card-body items-left text-left px-4 py-[14px]">
        <h2 className="card-title font-semibold text-2xl text-secondary">
          Your Booking #2
        </h2>
        <p className="font-medium text-xl text-secondary">Rp. 320K</p>
        <p className="py-1 px-2 w-32 rounded-lg bg-[#FFE0E0] text-[#FF3333] text-center font-medium text-base">
          Canceled
        </p>
        <div className="card-actions justify-center">
          <ButtonPay />
          <ButtonCancel />
        </div>
      </div>
    </section>
  );
};

const CardOrderSuccess = () => {
  return (
    <section className="card w-72 bg-white ">
      <figure className="px-3 pt-3">
        <img src={booking} alt="booking" className="rounded-xl w-72 h-48" />
      </figure>
      <div className="card-body items-left text-left px-4 py-[14px]">
        <h2 className="card-title font-semibold text-2xl text-secondary">
          Your Booking #1
        </h2>
        <p className="font-medium text-xl text-secondary">Rp. 100K</p>
        <p className="py-1 px-2 w-32 rounded-lg bg-[#DDF8E4] text-[#56DC77] text-center font-medium text-base">
          Success
        </p>
        <div className="card-actions justify-center">
          <ButtonPay />
          <ButtonCancel />
        </div>
      </div>
    </section>
  );
};

const CardClimber = () => {
  return (
    <div className="card w-[293px] h-32 py-7 bg-white">
      <p className="font-mediumn text-secondary text-lg text-center">
        Climber Declaration Letter
      </p>
      <div className="card-actions justify-center pt-2">
        <Link id="button-download-1" to="/files/surat-pernyataan-pendaki.pdf" target="_blank" download>
          <ButtonDownloadFile/>
        </Link>
      </div>
    </div>
  );
};

const CardParent = () => {
  return (
    <div className="card w-[293px] h-32 py-7 bg-white">
      <p className="font-mediumn text-secondary text-lg text-center">
        Parent's Statement Letter
      </p>
      <div className="card-actions justify-center pt-2">
        <Link
          id="button-download-2"
          to="/files/surat-pernyataan-orangtua.pdf"
          target="_blank"
          download
        >
          <ButtonDownloadFile/>
        </Link>
      </div>
    </div>
  );
};

const CardHealth = () => {
  return (
    <div className="card w-[293px] h-32 py-7 bg-white">
      <p className="font-mediumn text-secondary text-lg text-center">
        Health Declaration Letter
      </p>
      <div className="card-actions justify-center pt-2">
        <Link
          id="button-download-3"
          to="/files/sop-pemeriksaan-kesehatan.pdf"
          target="_blank"
          download
        >
          <ButtonDownloadFile/>
        </Link>
      </div>
    </div>
  );
};

const CardGarbage = () => {
  return (
    <div className="card w-[293px] h-32 py-7 bg-white">
      <p className="font-mediumn text-secondary text-lg text-center">
        Garbage Form
      </p>
      <div className="card-actions justify-center pt-2">
        <Link id="button-download-4" to="/files/form-sampah.pdf" target="_blank" download>
          <ButtonDownloadFile/>
        </Link>
      </div>
    </div>
  );
};

export {
  CardProduct,
  CardOrderBooking,
  CardBooking,
  CardOrderProgress,
  CardOrderCancel,
  CardOrderSuccess,
  CardClimber,
  CardParent,
  CardHealth,
  CardGarbage,
};
