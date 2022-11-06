import React from "react";
import { WithRouter } from "utils/Navigation";

import { NavbarAdmin, Sidebar } from "components/Navbar";

import { MdOutlineDownloadDone, MdExpandMore } from "react-icons/md";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AdminRanger = () => {
  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col h-screen gap-2 auto-cols-max auto-rows-max bg-[#E0E0E0]">
        <div className="row-span-3 w-80 bg-secondary">
          <Sidebar />
        </div>
        <div className="col-span-2 w-full h-48 max-h-full pt-8 bg-[#E0E0E0]">
          <NavbarAdmin />
          <div className="mt-10">
            <div className="col-span-2">
              <div className="font-semibold text-xl pl-10">
                Rangers Mount Gede
              </div>
              <div className="font-medium text-base mt-0.5 pl-10">
                More than 20+ rangers
              </div>

              <div className="overflow-x-auto mt-2">
                <table className="table w-[1000px] ml-10">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Fajar</td>
                      <td>08578755221</td>
                      <td>Duty</td>
                      <td>
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <AiFillEdit className="fill-secondary text-3xl mr-4" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart</td>
                      <td>08578755221</td>
                      <td>Available</td>
                      <td>
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <AiFillEdit className="fill-secondary text-3xl mr-4" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>misbah</td>
                      <td>08578755221</td>
                      <td>Off Work</td>
                      <td>
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <AiFillEdit className="fill-secondary text-3xl mr-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="font-medium text-lg mt-4 ml-[920px] justify-right">
              <p className="text-secondary flex items-center justify-center font-medium text-lg md:justify-start mb-6">
                Load More
                <MdExpandMore className="fill-secondary text-3xl mr-4" />
              </p>
            </div>
            <div className="font-semibold text-xl mt-4 pl-10">New Rangers</div>

            <div>
              <div className="mt-4">
                <table className="table w-[1000px] ml-10">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Ganderton</td>
                      <td>08578755221</td>
                      <td>See Details</td>
                      <td>
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <MdOutlineDownloadDone className="fill-success text-3xl mr-4" />
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
                    <tr>
                      <th>2</th>
                      <td>Hart</td>
                      <td>08578755221</td>
                      <td>See Details</td>
                      <td>
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <MdOutlineDownloadDone className="fill-success text-3xl mr-4" />
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
                    <tr>
                      <th>3</th>
                      <td>Brice</td>
                      <td>08578755221</td>
                      <td>See Details</td>
                      <td>
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <MdOutlineDownloadDone className="fill-success text-3xl mr-4" />
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
    </div>
  );
};

export default WithRouter(AdminRanger);
