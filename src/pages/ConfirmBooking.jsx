import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";
import { ButtonCancelBooking, ButtonConfirmBooking } from "components/Button";

const ConfirmBooking = () => {
  return (
    <Layout>
      <section className="mx-24 mt-14 mb-64">
        <div className="bg-white py-7 px-8 rounded-lg">
          <h5 className="font-semibold text-xl text-secondary mb-6">
            Payment Description
          </h5>
          <div className="divider m-0" />
          <div className="my-6">
            <p className="font-medium text-lg text-secondary mb-5">
              Ticket Quantity: 2
            </p>
            <p className="font-medium text-lg text-secondary mb-5">
              Items Booking: Camping Tent, Mat
            </p>
            <p className="font-medium text-lg text-secondary mb-5">
              Rangers: Fajar Nugraha
            </p>
            <p className="font-medium text-lg text-secondary">
              Total Price: Rp 198K
            </p>
          </div>
          <div className="divider m-0" />
          <div className="mt-12 mb-6">
            <ButtonConfirmBooking />
          </div>

          <ButtonCancelBooking />
        </div>
      </section>
    </Layout>
  );
};

export default WithRouter(ConfirmBooking);
