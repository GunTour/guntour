import React from "react";
import { Sidebar, NavbarAdmin } from "components/Navbar";
import { MdExpandMore } from "react-icons/md";
import { ModalAdminUSer } from "components/ModalAdmin";

const UsersPage = () => {
  return (
    <main className="mx-auto grid md:grid-flow-col gap-2">
      <aside className="md:grid-col-span-1">
        <Sidebar />
      </aside>

      <section className="md:grid-col-span-2">
        <NavbarAdmin />
        <div className="divider text-[#F0F0F0]" />

        <div className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11">
          <ModalAdminUSer />
        </div>

        <article className="container mx-auto py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col justify-start rounded-xl p-6 bg-[#F2F2F2]">
              <p className="font-semibold text-xl text-primary">IS CLIMBERS</p>
              <p className="font-semibold text-[32px] text-secondary">230</p>
            </div>
            <div className="flex flex-col justify-start rounded-xl p-6 bg-[#F2F2F2]">
              <p className="font-semibold text-xl text-primary">MALE CLIMBER</p>
              <p className="font-semibold text-[32px] text-secondary">140</p>
            </div>
            <div className="flex flex-col justify-start rounded-xl p-6 bg-[#F2F2F2]">
              <p className="font-semibold text-xl text-primary">
                FEMALE CLIMBER
              </p>
              <p className="font-semibold text-[32px] text-secondary">90</p>
            </div>
          </div>
        </article>

        <p className="text-secondary font-semibold text-xl">Climbers</p>
        <p className="font-medium text-base text-[#B5B5C3]">
          More than 200+ users
        </p>

        <section className="overflow-x-auto py-6 mr-11">
          <table className="table w-full">
            <thead className="text-secondary font-semibold text-lg">
              <tr>
                <th></th>
                <th>NAME</th>
                <th>PHONE NUMBER</th>
                <th>CHECK IN</th>
                <th>CHECK OUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-secondary font-semibold text-lg">1</th>
                <td className="text-secondary font-medium text-lg">
                  Fajar Nugraha
                </td>
                <td className="text-secondary font-medium text-lg">
                  08579755221
                </td>
                <td className="text-secondary font-normal text-lg">
                  22-12-2023
                </td>
                <td className="text-secondary font-normal text-lg">
                  22-13-2023
                </td>
              </tr>

              <tr>
                <th className="text-secondary font-semibold text-lg">2</th>
                <td className="text-secondary font-medium text-lg">
                  Asep Firdaus
                </td>
                <td className="text-secondary font-medium text-lg">
                  08569755221
                </td>
                <td className="text-secondary font-normal text-lg">
                  22-12-2023
                </td>
                <td className="text-secondary font-normal text-lg">
                  22-14-2023
                </td>
              </tr>

              <tr>
                <th className="text-secondary font-semibold text-lg">3</th>
                <td className="text-secondary font-medium text-lg">Misbah</td>
                <td className="text-secondary font-medium text-lg">
                  08529755221
                </td>
                <td className="text-secondary font-normal text-lg">
                  22-12-2023
                </td>
                <td className="text-secondary font-normal text-lg">
                  22-13-2023
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11">
          <button>Load More</button>
          <MdExpandMore className="text-secondary text-xl ml-2" />
        </div>
      </section>
    </main>
  );
};

export default UsersPage;
