import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { TokenContext } from "utils/context";
import { handleAuth, setBooking } from "utils/redux/reducers/reducer";

import axios from "axios";

import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import HomeAnonym from "pages/HomeAnonym";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";
import Booking from "pages/Booking";
import ConfirmBooking from "pages/ConfirmBooking";
import OrderHistory from "pages/OrderHistory";
import BecomeRanger from "pages/BecomeRanger";
import GuidePage from "pages/GuidePage";
import NotFound from "pages/NotFound";
import AdminProduct from "pages/admin/AdminProduct";
import AdminRanger from "pages/admin/AdminRanger";
import UsersPage from "pages/admin/UsersPage";
import About from "pages/About";

axios.defaults.baseURL = "https://mdanys.online/";

const Index = () => {
  const [cookie, removeCookie] = useCookies();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  const checkToken = cookie.token;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  (function () {
    if (checkToken) {
      const { token } = cookie;
      dispatch(handleAuth(true));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      dispatch(handleAuth(false));
      delete axios.defaults.headers.common["Authorization"];
    }
  })();

  useEffect(() => {
    const getProduct = localStorage.getItem("addBooking");
    if (getProduct) {
      dispatch(setBooking(JSON.parse(getProduct)));
    }
  });

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeAnonym />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/login"
            element={checkToken ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/register"
            element={checkToken ? <HomeAnonym /> : <Login />}
          />
          <Route
            path="/home"
            element={checkToken ? <HomePage /> : <HomePage />}
          />
          <Route
            path="/detail/:id"
            element={checkToken ? <DetailPage /> : <Login />}
          />
          <Route
            path="/booking"
            element={checkToken ? <Booking /> : <Login />}
          />
          <Route
            path="/confirm"
            element={checkToken ? <ConfirmBooking /> : <Login />}
          />
          <Route
            path="/history"
            element={checkToken ? <OrderHistory /> : <Login />}
          />
          <Route
            path="/ranger"
            element={checkToken ? <BecomeRanger /> : <Login />}
          />
          <Route
            path="/guide"
            element={checkToken ? <GuidePage /> : <GuidePage />}
          />
          <Route path="/admin" element={<AdminProduct />} />
          <Route path="/adminranger" element={<AdminRanger />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default Index;
