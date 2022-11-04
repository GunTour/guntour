import React, { useEffect, useState } from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { Input, InputEmail, InputPassword } from "components/Input";
import { ButtonRegister } from "components/Button";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "utils/apiRequest";

import Swal from "sweetalert2";
import imgRegister from "assets/img-register.svg";

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fullname && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fullname, email, password]);

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (fullname.length === 0 || email.length === 0 || password.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Data cannot be empty !",
        showConfirmButton: true,
      });
      return;
    }

    if (fullname.length < 3) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter full name !",
        showConfirmButton: true,
      });
      return;
    }

    const body = {
      fullname: fullname,
      email: email,
      password: password,
    };
    apiRequest("user", "post", body)
      .then((res) => {
        const { message, data } = res;
        if (data) {
          navigate("/login");
        }
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register successful ! Please Login !",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
              <Input
                onChange={(e) => setFullName(e.target.value)}
                value={fullname}
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div>
              <p className="text-lg text-secondary py-3">Your Email</p>
              <InputEmail
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
              />
            </div>

            <div>
              <p className="text-lg text-secondary py-3">Password</p>
              <InputPassword
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <br />
            <ButtonRegister
              onClick={(e) => handleRegister(e)}
              className="bg-primary font-medium text-base text-center text-white"
            />
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
