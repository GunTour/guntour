import React from "react";
import booking from "assets/booking.svg";
import { ButtonBookNow, ButtonDownloadFile } from "components/Button";
import { Link } from "react-router-dom";
import { apiRequest } from "utils/apiRequest";

import Swal from "sweetalert2";

import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const CardProduct = (props) => {
  return (
    <section className="card w-72 bg-white">
      <figure className="px-3 pt-3">
        <img
          idProduct={props.id_product}
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
        <div className="card-actions justify-center w-full">
          <ButtonBookNow id={props.idProduct} onClick={props.handleBook} />
        </div>
      </div>
    </section>
  );
};

const CardBooking = (props) => {
  const [counter, setCounter] = React.useState(1);
  let handleCounterPlus = (value, price) => {
    setCounter(counter + value);
    let sumProduct = document.getElementById("text-grossamount").value;
    let total = parseInt(sumProduct) + price;
    document.getElementById("text-grossamount").value = total;
  };

  let handleCounterMinus = (value, price) => {
    setCounter(counter + value);
    let minProduct = document.getElementById("text-grossamount").value;
    let totalMin = parseInt(minProduct) - price;
    document.getElementById("text-grossamount").value = totalMin;
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
                  id={props.idProduct}
                  className="mr-3.5 rounded-full bg-primary text-3xl text-white mt-1"
                  onClick={() => {
                    handleCounterMinus(props.sub, props.price);
                  }}
                />
              </button>
              <p className="text-lg font-medium w-auto text-center mt-1.5 qtyProduct">
                {counter}
              </p>
              <button>
                <AiFillPlusCircle
                  id={props.idProduct}
                  className="text-primary text-3xl mt-1 ml-3.5"
                  onClick={() => handleCounterPlus(props.add, props.price)}
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
        <input
          id={props.idProduct}
          value={props.price * counter}
          className="bg-red-300"
        />
      </div>
    </section>
  );
};

const CardOrderBooking = (props) => {
  function handleDeleteBooking(id_booking) {
    Swal.fire({
      title: "Do you want to Delete ?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        apiRequest(`booking/${id_booking}`, "delete", {})
          .then((res) => {
            var card = document.getElementById("CardHistory-" + id_booking);
            card.className += " hidden";
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            alert(err.toString());
          })
          .finally((res) => {});
      }
    });
  }

  return (
    <section
      id={"CardHistory-" + props.idBooking}
      className="card w-72 bg-white "
    >
      <figure className="px-3 pt-3">
        <img src={booking} alt="booking" className="rounded-xl w-72 h-48" />
      </figure>
      <div className="card-body items-left text-left px-4 py-[14px]">
        <h2 className="card-title font-semibold text-2xl text-secondary">
          Your Booking #{props.idBooking}
        </h2>
        <p className="font-medium text-xl text-secondary hidden">
          Rp. {props.priceBooking}
        </p>
        <p
          className={`py-1 px-2 w-32 h-9 rounded-lg  ${
            props.statusBooking === "settlement"
              ? "bg-[#DDF8E4]  text-[#56DC77]"
              : props.statusBooking === "unpaid"
              ? "bg-[#FFF1CC] text-[#F0AD00]"
              : "bg-[#FFE0E0]  text-[#FF3333]"
          }  text-center font-medium text-base`}
        >
          {props.statusBooking}
        </p>
        <div className="card-actions justify-center">
          <a href={props.payBooking}>
            <button
              className={`login font-medium text-center justify-center h-[48px] w-[265px] px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white 
              ${
                props.statusBooking === "settlement"
                  ? "hidden"
                  : props.statusBooking === "expire"
                  ? "hidden"
                  : "null"
              }`}
            >
              Pay Now
            </button>
          </a>
          <div>
            <button
              id="cancel"
              key={props.idBooking}
              className={`login font-normal text-center justify-center h-[48px] w-[265px] rounded-lg border border-slate text-slate-400 transform active:scale-95 transition-transform flex items-center
              ${
                props.statusBooking === "unpaid"
                  ? "cursor-pointer"
                  : props.statusBooking === "pending"
                  ? "cursor-pointer"
                  : props.statusBooking === "expire"
              }
              `}
              onClick={() => handleDeleteBooking(props.idBooking)}
            >
              Delete
            </button>
          </div>
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
        <Link to="/files/surat-pernyataan-pendaki.pdf" target="_blank" download>
          <ButtonDownloadFile id="button-download-1" />
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
          to="/files/surat-pernyataan-orangtua.pdf"
          target="_blank"
          download
        >
          <ButtonDownloadFile />
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
          to="/files/sop-pemeriksaan-kesehatan.pdf"
          target="_blank"
          download
        >
          <ButtonDownloadFile />
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
        <Link to="/files/form-sampah.pdf" target="_blank" download>
          <ButtonDownloadFile />
        </Link>
      </div>
    </div>
  );
};

export {
  CardProduct,
  CardOrderBooking,
  CardBooking,
  CardClimber,
  CardParent,
  CardHealth,
  CardGarbage,
};
