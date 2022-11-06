import React from "react";
import { WithRouter } from "utils/Navigation";

import { Sidebar, NavbarAdmin } from "components/Navbar";

import { MdExpandMore, MdOutlineDownloadDone } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const AdminRanger = () => {
  return (
    <div className="flex">
      <section>
        <Sidebar />
      </section>

      <main>
        {/* Header */}
        <div className="ml-9 mt-5">
          <NavbarAdmin />
        </div>

        {/* Table Rangers*/}
        <div className="ml-10 mb-10 w-full">
          <div className="overflow-x-auto">
            {/* Text Ranger */}
            <div className="mt-9 mb-6">
              <h5 className="font-semibold text-lg text-secondary mb-2">
                Ranger Mount Gede
              </h5>
              <p className="font-light text-base text-[#B5B5C3]">
                More than 20+ rangers
              </p>
            </div>

            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-semibold text-base text-secondary">
                    NAME
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    PHONE NUMBER
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    STATUS
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Fajar Nugraha</td>
                  <td>08579755221</td>
                  <td>Duty</td>
                  <td>
                    <button className="text-2xl text-gray-600 ml-4">
                      <AiFillEdit />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-right flex items-center justify-end mt-3 font-medium text-base">
              <button>Load More</button>
              <MdExpandMore className="text-secondary text-xl ml-2 mr-2" />
            </div>
          </div>
        </div>

        {/* Table New Rangers*/}
        <div className="ml-10 w-full">
          <div className="overflow-x-auto">
            {/* Text Ranger */}
            <div className="mt-9 mb-6">
              <h5 className="font-semibold text-lg text-secondary mb-2">
                New Rangers
              </h5>
            </div>

            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-semibold text-base text-secondary">
                    NAME
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    PHONE NUMBER
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    PDF File
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Asep Firdaus</td>
                  <td>08579755221</td>
                  <td>See Details</td>
                  <td>
                    <button className="text-2xl text-green-400">
                      <MdOutlineDownloadDone />
                    </button>
                    <button className="text-2xl text-red-600 ml-4">
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-right flex items-center justify-end mt-3 font-medium text-base">
              <button>Load More</button>
              <MdExpandMore className="text-secondary text-xl ml-2 mr-2" />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default WithRouter(AdminRanger);
