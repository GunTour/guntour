import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { InputEmail, InputPassword } from "components/Input";
import { ButtonSign } from "components/Button";
import { Link } from "react-router-dom";

import imgLogin from "assets/img-login.svg";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="hidden md:hidden lg:flex justify-center place-items-center w-full h-screen">
          <img src={imgLogin} alt="imgLogin" className="w-[795] h-[1189]" />
        </div>
        <div className="flex flex-wrap justify-center place-items-center w-full h-screen p-2">
          <div>
            <h1 className="font-semibold text-secondary text-[40px] mt-10">
              Start your new <br /> experience with us.
            </h1>
            <p className="font-medium text-secondary text-xl lg:text-xl pt-4">
              Sign in to your account
            </p>
            <div>
              <p className="text-lg text-secondary py-3">Your Email</p>
              <InputEmail value="" placeholder="Email address" />
            </div>

            <div>
              <p className="text-lg text-secondary py-3">Password</p>
              <InputPassword value="" placeholder="Password" />
            </div>
            <p className="text-light text-lg text-primary text-right cursor-pointer py-3">
              Reset Password
            </p>
            <ButtonSign className="bg-primary font-medium text-base text-center text-white" />
            <p className="text-light text-base text-center text-[#B4B4B4] pt-6">
              Already have an account?
              <Link
                to="/register"
                className="text-light text-base text-primary text-center"
              >
                &nbsp; Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRouter(Login);
