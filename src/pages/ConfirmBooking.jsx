import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";
import { ButtonCancelBooking, ButtonConfirmBooking } from "components/Button";

const ConfirmBooking = () => {
  return (
    <Layout>
      <main className="grid grid-cols-1 mx-20 py-20">
        <section className="grid grid-flow-row bg-white py-7 px-8 rounded-lg">
          <h5 className="font-semibold text-xl text-secondary">
            Payment Description
          </h5>
          <div className="divider" />
          <p className="font-medium text-lg text-secondary">
            Ticket Quantity: 2
          </p>
          <p className="font-medium text-lg text-secondary py-2">
            Items Booking: Camping Tent, Mat
          </p>
          <p className="font-medium text-lg text-secondary pb-2">
            Rangers: Fajar Nugraha
          </p>
          <p className="font-medium text-lg text-secondary">
            Total Price: Rp 198K
          </p>
          <div className="divider" />
          <ButtonConfirmBooking />
          <div className="pt-2">
            <ButtonCancelBooking />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default WithRouter(ConfirmBooking);
