import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { TokenContext } from "utils/context";
import { handleAuth, setBooking } from "utils/redux/reducers/reducer";

import axios from "axios";

import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import HomeAnonym from "pages/Index";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";
import Booking from "pages/Booking";
import ConfirmBooking from "pages/ConfirmBooking";
import OrderHistory from "pages/OrderHistory";
import BecomeRanger from "pages/BecomeRanger";
import NotFound from "pages/NotFound";
import Admin from "pages/admin/Index";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/khalidrianda/GunTour/1.0.0/";

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
          <Route path="/" element={<HomeAnonym />} />
          <Route
            path="/login"
            element={checkToken ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/register"
            element={checkToken ? <Navigate to="/home" /> : <Register />}
          />
          <Route path="/home" element={checkToken ? <HomePage /> : <Login />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirm" element={<ConfirmBooking />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/ranger" element={<BecomeRanger />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default Index;
