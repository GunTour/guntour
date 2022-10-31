import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";


import Login from "pages/auth/Login";
import Register from "pages/auth/Register"
import HomeAnonym from "pages/Index";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";
import Booking from "pages/Booking"
import ConfirmBooking from "pages/ConfirmBooking"
import OrderHistory from "pages/OrderHistory"
import NotFound from "pages/NotFound";
import Admin from "pages/admin/Index"

const Index = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAnonym />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirm" element={<ConfirmBooking />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Index