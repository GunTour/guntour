import React from "react";
import { WithRouter } from "utils/Navigation";

import { NavbarAdmin, Sidebar } from "components/Navbar";

import { AiFillDelete } from "react-icons/ai";
import Tent from "assets/camping-tent.svg";
import { ModalAdminProduct, ModalEditAdminProduct } from "components/ModalAdmin";

const AdminProduct = () => {
  return (
    <div className="mx-auto grid md:grid-flow-col gap-2">
      <aside className="md:grid-col-span-1">
        <Sidebar />
      </aside>

      <div className="md:grid-col-span-2">
        <NavbarAdmin />
        <div className="divider text-[#F0F0F0]" />

        <div className="mt-10">
          <div className="col-span-2">
            <div className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11">
              <ModalAdminProduct/>
            </div>

            <div className="overflow-x-auto py-6 mr-11">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
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
                            className="max-w-xl h-[56px] w-[56px] rounded-lg mr-10"
                          />
                          <p className="mt-4"> Camping Tent </p>
                        </div>
                      </div>
                    </td>
                    <td>100K/day</td>
                    <td>See Details</td>
                    <td>
                      <div className="flex items-center text-sm">
                      <button className="text-2xl text-gray-600 ml-4">
                        <ModalEditAdminProduct/>
                      </button>
                        <button
                          className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <AiFillDelete className="fill-[#CC0000] text-3xl mr-4" />
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
