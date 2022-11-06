import React, { useEffect, useState } from "react";
import { WithRouter } from "utils/Navigation";
import { Helmet } from "react-helmet";
import { InputEmail, InputPassword } from "components/Input";
import { ButtonSign } from "components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { handleAuth } from "utils/redux/reducers/reducer";
import { apiRequest } from "utils/apiRequest";

import Swal from "sweetalert2";
import imgLogin from "assets/img-login.jpg";

const Login = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Data cannot be empty !",
        showConfirmButton: true,
      });
      return;
    }

    const body = {
      email: email,
      password: password,
    };
    apiRequest("login", "post", body)
      .then((res) => {
        // const { data } = res.data;
        setCookie("token", res.data.token, { path: "/login" });
        dispatch(handleAuth(true));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You're logged in !",
          showConfirmButton: true,
        });
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Helmet>
        <title>Login | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="hidden md:hidden lg:flex justify-center place-items-center w-full h-screen">
          <img src={imgLogin} alt="imgLogin" className="w-full h-[1189]" />
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
              <InputEmail
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
              />
            </div>

            <div className="mb-14">
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
            <ButtonSign
              onClick={(e) => handleLogin(e)}
              id="sign"
              className="bg-primary font-medium text-base text-center text-white"
            />
            <p className="text-light text-base text-center text-[#B4B4B4] pt-6">
              Already have an account?
              <Link
                to="/register"
                id="register"
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
