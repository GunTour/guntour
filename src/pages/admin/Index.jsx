import React from "react";
import { WithRouter } from "utils/Navigation";

import { NavbarAdmin, Sidebar } from "components/Navbar";

import { AiFillDelete } from "react-icons/ai";
import Tent from "assets/camping-tent.svg";
import {
  ModalAdminProduct,
  ModalEditAdminProduct,
} from "components/ModalAdmin";

const AdminProduct = () => {
  return (
    <div className="mx-auto grid md:grid-flow-col gap-2">
      <aside className="md:grid-col-span-1">
        <Sidebar />
      </aside>

      <div className="md:grid-col-span-3">
        <NavbarAdmin />
        <div className="divider m-0 mr-14" />

        <div className="mt-10">
          <div className="col-span-2">
            <div className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11">
              <ModalAdminProduct />
            </div>

            <div className="overflow-x-auto py-6 mr-11">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th className="font-semibold text-base text-secondary">
                      NAME
                    </th>
                    <th className="font-semibold text-base text-secondary">
                      PRICE
                    </th>
                    <th className="font-semibold text-base text-secondary">
                      DESCRIPTION
                    </th>
                    <th className="font-semibold text-base text-secondary">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex">
                          <img
                            src={Tent}
                            alt=""
                            className="max-w-xl h-14 w-14 rounded-lg"
                          />
                          <p className="ml-5 mt-4">Camping Tent</p>
                        </div>
                      </div>
                    </td>
                    <td>100K/day</td>
                    <td>See Details</td>
                    <td>
                      <div className="flex items-center text-sm">
                        <button className="text-2xl text-gray-600">
                          <ModalEditAdminProduct />
                        </button>
                        <button>
                          <AiFillDelete className="fill-red-600 text-3xl mr-14 ml-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(AdminProduct);
