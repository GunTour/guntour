import React from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { Input, InputEmail, InputPassword } from "components/Input";
import { ButtonRegister } from "components/Button";
import { Link } from "react-router-dom";

import imgRegister from "assets/img-register.svg";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="hidden md:hidden lg:flex justify-center place-items-center w-full h-screen">
          <img
            src={imgRegister}
            alt="imgRegister"
            className="w-[795] h-[1189]"
          />
        </div>
        <div className="flex flex-wrap justify-center place-items-center w-full h-screen p-2">
          <div>
            <h1 className="font-semibold text-secondary text-[40px] mt-10">
              Register your account
            </h1>
            <p className="font-light text-secondary text-lg my-6">
              Explore Mount Pangrango simply by registering and <br />
              exploring.
            </p>
            <p className="font-medium text-secondary text-xl lg:text-xl mb-6">
              Register your account and enjoy
            </p>
            <div>
              <p className="text-lg text-secondary pb-3">Full Name</p>
              <Input value="" placeholder="Full Name" />
            </div>

            <div>
              <p className="text-lg text-secondary py-3">Your Email</p>
              <InputEmail value="" placeholder="Email address" />
            </div>

            <div>
              <p className="text-lg text-secondary py-3">Password</p>
              <InputPassword value="" placeholder="Password" />
            </div>
            <br />
            <ButtonRegister className="bg-primary font-medium text-base text-center text-white" />
            <p className="text-light text-base text-center text-[#B4B4B4] pt-6">
              Already have an account?
              <Link
                to="/login"
                className="text-light text-base text-primary text-center"
              >
                &nbsp; Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRouter(Register);
