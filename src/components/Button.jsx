import React from "react";

export const ButtonSign = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-[60px] w-[468px] px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
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
      <button className="login text-center text-base font-normal justify-center h-10 w-60 px-6 py-1 rounded-full text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <div className="text-sm font-normal">RETURN TO HOME</div>
      </button>
    </div>
  );
};

export const ButtonBooking = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-40 px-6 py-1 rounded-full text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Booking Now</span>
      </button>
    </div>
  );
};

export const ButtonLogin = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-12 w-20 px-6 py-1 rounded-md text-primary bg-[#FEF3EB] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Login</span>
      </button>
    </div>
  );
};

export const ButtonRegisterAnonym = () => {
  return (
    <div>
      <button className="font-medium text-center justify-center h-12 w-30 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Register</span>
      </button>
    </div>
  );
};

export const ButtonBookNow = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-12 w-[265px] px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Book Now</span>
      </button>
    </div>
  );
};

export const ButtonJoin = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-60 px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Join Community</span>
      </button>
    </div>
  );
};

export const ButtonBookNowDetails = () => {
  return (
    <div>
      <button className="login font-medium text-base text-center justify-center h-11 w-44 px-6 py-1 rounded-lg text-white bg-primary transform active:scale-50 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Book Now</span>
      </button>
    </div>
  );
};

export const ButtonBooked = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-8 w-6/12 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Booked Now</span>
      </button>
    </div>
  );
};

export const ButtonConfirmBooking = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-6/12 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Confirm Booking</span>
      </button>
    </div>
  );
};

export const ButtonSubmitData = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-6/12 px-6 py-1 rounded-md text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Submit Data</span>
      </button>
    </div>
  );
};

export const ButtonCancel = () => {
  return (
    <div>
      <button className="login font-light text-center justify-center h-12 w-64 px-6 py-1 rounded-lg text-[#999999] border border-[#999999] transform active:scale-75 transition-transform flex items-center hover:bg-[#FFE0E0] ">
        <span>Cancel</span>
      </button>
    </div>
  );
};

export const ButtonChooseFile = () => {
  return (
    <div>
      <button className="login font-normal text-center justify-center h-12 w-46 px-6 py-1 rounded-lg text-white bg-[#999999] border border-[#999999] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
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
      <button className="login font-normal text-center justify-center h-10 w-38 px-6 py-1 rounded-md text-[#F0AD00] bg-[#FFF1CC] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>On Progress</span>
      </button>
    </div>
  );
};

export const ButtonCanceled = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-36 px-6 py-1 rounded-md text-[#FF3333] bg-[#FFE0E0] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Canceled</span>
      </button>
    </div>
  );
};

export const ButtonSuccess = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-36 px-6 py-1 rounded-md text-[#56DC77] bg-[#DDF8E4] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Success</span>
      </button>
    </div>
  );
};

export const ButtonCancelHistory = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-56 px-6 py-1 rounded-lg text-[#999999] border border-[#999999] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Cancel</span>
      </button>
    </div>
  );
};

export const ButtonUpdate = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-10 w-6/12 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Update</span>
      </button>
    </div>
  );
};

export const ButtonAcc = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Acc</span>
      </button>
    </div>
  );
};
export const ButtonReject = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Reject</span>
      </button>
    </div>
  );
};

export const ButtonEdit = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Edit</span>
      </button>
    </div>
  );
};

export const ButtonDelete = () => {
  return (
    <div>
      <button className="login font-medium text-center justify-center h-8 w-16 px-6 py-1 text-black bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span>Delete</span>
      </button>
    </div>
  );
};
