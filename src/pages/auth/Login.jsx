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
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "There is a mistake!",
          text: "Please fill in the data correctly",
          showConfirmButton: true,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Helmet>
        <title>Login | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <main className="mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          <aside className="flex justify-center">
            <img src={imgLogin} alt="imgLogin" className="w-full h-full" />
          </aside>
          <article className="md:grid-col-span-2 bg-white px-20 py-60">
            <h1 className="font-semibold text-secondary text-[40px]">
              Start your new <br /> experience with us.
            </h1>

            <section className="grid md:grid-rows-7 gap-4">
              <p className="font-medium text-secondary text-xl lg:text-xl">
                Sign in to your account
              </p>

              <p className="text-lg text-secondary">Your Email</p>

              <InputEmail
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
              />

              <p className="text-lg text-secondary">Password</p>

              <InputPassword
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />

              <ButtonSign
                onClick={(e) => handleLogin(e)}
                id="sign"
                className="bg-primary font-medium text-base text-center text-white"
              />

              <p className="text-light text-base text-center text-[#B4B4B4]">
                Already have an account?
                <Link
                  to="/register"
                  id="register"
                  className="text-light text-base text-primary text-center"
                >
                  &nbsp; Register Here
                </Link>
              </p>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default WithRouter(Login);
