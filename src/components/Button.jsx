import React from "react";

export const ButtonSign = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        id="sign"
        className="login font-medium text-center justify-center h-[60px] w-[468px] px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Sign In</span>
      </button>
    </div>
  );
};

export const ButtonRegister = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        id="register"
        className="login font-medium text-center justify-center h-[60px] w-[468px] px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Register Account</span>
      </button>
    </div>
  );
};

export const ButtonReturn = () => {
  return (
    <div>
      <button
        id="return"
        className="text-center text-base font-normal justify-center h-[46px] w-[230px] px-6 py-1 rounded-full text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span className="text-xs font-semibold">RETURN TO HOME</span>
      </button>
    </div>
  );
};

export const ButtonBooking = () => {
  return (
    <div>
      <button
        id="booking"
        className="login font-medium text-center justify-center h-10 w-40 px-6 py-1 rounded-full text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Booking Now</span>
      </button>
    </div>
  );
};

export const ButtonLogin = () => {
  return (
    <div>
      <button
        id="login"
        className="login font-medium text-center justify-center h-12 w-20 px-6 py-1 rounded-md text-primary bg-[#FEF3EB] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Login</span>
      </button>
    </div>
  );
};

export const ButtonRegisterAnonym = () => {
  return (
    <div>
      <button
        id="regis-anonym"
        className="font-medium text-center justify-center h-12 w-30 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Register</span>
      </button>
    </div>
  );
};

export const ButtonBookNow = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        id="book-now"
        className="login font-medium text-center justify-center h-12 w-[265px] px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Book Now</span>
      </button>
    </div>
  );
};

export const ButtonJoin = () => {
  return (
    <div>
      <a href="https://t.me/+U8gsU0ll3cE5MTc1" target="_blank" rel="noreferrer">
        <button
          id="join"
          className="login font-medium text-center justify-center h-10 w-60 px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
        >
          <span>Join Community</span>
        </button>
      </a>
    </div>
  );
};

export const ButtonBookNowDetails = () => {
  return (
    <div>
      <button
        id="booknow-details"
        className="login font-medium text-base text-center justify-center h-11 w-44 px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Book Now</span>
      </button>
    </div>
  );
};

export const ButtonBooked = () => {
  return (
    <div>
      <button
        id="booked-now"
        className="login font-medium text-xl text-center justify-center h-14 w-full px-6 py-1 rounded-md text-white bg-primary transform active:scale-95 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Booked Now</span>
      </button>
    </div>
  );
};

export const ButtonConfirmBooking = () => {
  return (
    <div>
      <button
        id="confirm-booking"
        className="login font-medium text-lg text-center justify-center h-14 w-full px-6 rounded-lg text-white bg-primary transform active:scale-95 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Confirm Booking</span>
      </button>
    </div>
  );
};

export const ButtonCancelBooking = () => {
  return (
    <div>
      <button
        id="cancel-book"
        className="login font-normal text-lg text-center justify-center h-14 w-full px-6 rounded-lg border text-[#999999] bg-white transform active:scale-95 transition-transform flex items-center hover:bg-slate-50 hover:text-slate-300"
      >
        <span>Cancel</span>
      </button>
    </div>
  );
};

export const ButtonSubmitData = () => {
  return (
    <div>
      <button
        id="submit"
        className="login font-medium text-center justify-center h-10 w-6/12 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Submit Data</span>
      </button>
    </div>
  );
};

export const ButtonCancel = () => {
  return (
    <div>
      <button
        id="cancel"
        className="login font-light text-center justify-center h-12 w-64 px-6 py-1 rounded-lg text-[#999999] border border-[#999999] transform active:scale-75 transition-transform flex items-center hover:bg-[#FFE0E0] "
      >
        <span>Cancel</span>
      </button>
    </div>
  );
};

export const ButtonChooseFile = () => {
  return (
    <div>
      <button
        id="choose-file"
        className="login font-normal text-center justify-center h-12 w-46 px-6 py-1 rounded-lg text-white bg-[#999999] border border-[#999999] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Choose File</span>
      </button>
    </div>
  );
};

export const ButtonPay = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-12 w-64 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Pay Now</span>
      </button>
    </div>
  );
};

export const ButtonOnprogress = () => {
  return (
    <div>
      <button
        id="onprogress"
        className="login font-normal text-center justify-center h-10 w-38 px-6 py-1 rounded-md text-[#F0AD00] bg-[#FFF1CC] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>On Progress</span>
      </button>
    </div>
  );
};

export const ButtonCanceled = () => {
  return (
    <div>
      <button
        id="canceled"
        className="login font-medium text-center justify-center h-10 w-36 px-6 py-1 rounded-md text-[#FF3333] bg-[#FFE0E0] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Canceled</span>
      </button>
    </div>
  );
};

export const ButtonSuccess = () => {
  return (
    <div>
      <button
        id="success"
        className="login font-medium text-center justify-center h-10 w-36 px-6 py-1 rounded-md text-[#56DC77] bg-[#DDF8E4] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Success</span>
      </button>
    </div>
  );
};

export const ButtonCancelHistory = () => {
  return (
    <div>
      <button
        id="cancel-history"
        className="login font-medium text-center justify-center h-10 w-56 px-6 py-1 rounded-lg text-[#999999] border border-[#999999] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Cancel</span>
      </button>
    </div>
  );
};

export const ButtonUpdate = () => {
  return (
    <div>
      <button
        id="update"
        className="login font-medium text-center justify-center h-10 w-6/12 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Update</span>
      </button>
    </div>
  );
};

export const ButtonAcc = () => {
  return (
    <div>
      <button
        id="acc"
        className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Acc</span>
      </button>
    </div>
  );
};
export const ButtonReject = () => {
  return (
    <div>
      <button
        id="reject"
        className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Reject</span>
      </button>
    </div>
  );
};

export const ButtonEdit = () => {
  return (
    <div>
      <button
        id="edit"
        className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Edit</span>
      </button>
    </div>
  );
};

export const ButtonDelete = () => {
  return (
    <div>
      <button
        id="delete"
        className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span>Delete</span>
      </button>
    </div>
  );
};

export const ButtonDownloadFile = () => {
  return (
    <div>
      <button
        id="download"
        className="font-medium text-base text-center px-16 h-10 w-60 rounded-lg text-white bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-black "
      >
        <span>Download File</span>
      </button>
    </div>
  );
};
