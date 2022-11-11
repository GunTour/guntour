import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { apiRequest } from "utils/apiRequest";
import { Helmet } from "react-helmet";

import { Sidebar, NavbarAdmin } from "components/Navbar";
import { MdExpandMore } from "react-icons/md";
import { ModalAdminUSer } from "components/ModalAdmin";

const UsersPage = () => {
  const [data, setData] = useState([]);
  const [climber, setClimber] = useState([]);
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState(1);

  useEffect(() => {
    fetchData();
  }, [table]);

  const fetchData = async () => {
    setLoading(true);
    apiRequest("admin/pendaki", "get", {})
      .then((res) => {
        const { data, climber } = res;
        setData(data);
        setClimber(climber);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const LoadMore = () => {
    setTable(table + 1);
    fetchData(table);
  };

  if (loading) {
    return (
      <h2
        id="loading"
        className="text-secondary font-medium text-lg bg-white text-center mt-80"
      >
        Loading Data...
      </h2>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin | GunTour</title>
        <meta name="description" content="App Description" />
      </Helmet>
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
              <div className="flex flex-col justify-start rounded-xl p-6 bg-gray-100">
                <p className="font-semibold text-xl text-primary">
                  IS CLIMBERS
                </p>
                <p className="font-semibold text-[32px] text-secondary">
                  {climber.is_climber}
                </p>
              </div>
              <div className="flex flex-col justify-start rounded-xl p-6 bg-gray-100">
                <p className="font-semibold text-xl text-primary">
                  MALE CLIMBER
                </p>
                <p className="font-semibold text-[32px] text-secondary">
                  {climber.male_climber}
                </p>
              </div>
              <div className="flex flex-col justify-start rounded-xl p-6 bg-gray-100">
                <p className="font-semibold text-xl text-primary">
                  FEMALE CLIMBER
                </p>
                <p className="font-semibold text-[32px] text-secondary">
                  {climber.female_climber}
                </p>
              </div>
            </div>
          </article>

          <p className="text-secondary font-semibold text-xl mb-2 mt-3">
            Climbers
          </p>
          <p className="font-normal text-base text-gray-400">
            More than 200+ users
          </p>

          <section className="overflow-x-auto py-6 mr-11">
            <table className="table w-full">
              <thead className="text-secondary font-semibold text-lg">
                <tr>
                  <th></th>
                  <th className="font-semibold text-base text-secondary">
                    NAME
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    PHONE
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    CHECK IN
                  </th>
                  <th className="font-semibold text-base text-secondary">
                    CHECK OUT
                  </th>
                </tr>
              </thead>
              {data.map((pendaki) => (
                <tbody>
                  <tr key={pendaki.id_pendaki}>
                    <th>{pendaki.id_pendaki}</th>
                    <td className="text-secondary font-medium text-base">
                      {pendaki.fullname}
                    </td>
                    <td className="text-secondary font-normal text-base">
                      {pendaki.phone}
                    </td>
                    <td className="text-secondary font-normal text-base">
                      {pendaki.date_start}
                    </td>
                    <td className="text-secondary font-normal text-base">
                      {pendaki.date_end}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </section>

          <div className="text-right flex items-center justify-end font-medium text-base mr-11">
            <button onClick={(value) => LoadMore(value)}>Load More</button>
            <MdExpandMore className="text-secondary text-xl ml-2" />
          </div>
        </section>
      </main>
    </>
  );
};

export default WithRouter(UsersPage);
