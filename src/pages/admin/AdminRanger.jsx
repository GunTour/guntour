import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { apiRequest } from "utils/apiRequest";

import { Sidebar, NavbarAdmin } from "components/Navbar";

import { MdExpandMore, MdOutlineDownloadDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { ModalEditRanger } from "components/ModalAdmin";

const AdminRanger = () => {
  const [data, setData] = useState([]);
  const [ranger, setRanger] = useState([]);
  const [loading, setLoading] = useState(true);
  const [objSubmit, setObjSubmit] = useState("");
  const [table, setTable] = useState(3);
  const [tables, setTables] = useState(3);

  useEffect(() => {
    fetchData();
    handleApplyRanger();
    handleRanger();
  }, [table, tables]);

  const fetchData = async () => {
    apiRequest("admin/ranger", "get", {})
      .then((res) => {
        const results = res.data;
        setData(results);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRanger = async () => {
    apiRequest("admin/ranger", "get", {})
      .then((res) => {
        const results = res.data_ranger.data;
        setRanger(results);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleApplyRanger = async () => {
    apiRequest("admin/ranger", "get", {})
      .then((res) => {
        const results = res.data_apply.data;
        setData(results);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id_ranger) => {
    apiRequest(`admin/product/${id_ranger}`, "delete", {})
      .then((res) => {
        handleApplyRanger();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAccept = (id_ranger) => {
    const body = {
      status: "",
      status_apply: "accepted",
    };

    apiRequest(`admin/ranger/${id_ranger}`, "put", body)
      .then((res) => {
        handleApplyRanger();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleStatus = async (id_ranger) => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest(`admin/ranger/${id_ranger}`, "put", objSubmit)
      .then((res) => {
        handleRanger();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const LoadMore = () => {
    setTable(table + 3);
    fetchData(table);
  };

  const LoadMoreRanger = () => {
    setTables(setTables + 3);
    fetchData(tables);
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
    <div className="mx-auto grid md:grid-flow-col gap-2">
      <aside className="md:grid-col-span-1">
        <Sidebar />
      </aside>

      <main>
        {/* Header */}
        <div className="md:grid-col-span-2">
          <NavbarAdmin />
          <div className="divider text-[#F0F0F0]" />
        </div>

        {/* Table Rangers*/}
        <div className="mb-10 w-full">
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

            <section className="overflow-x-auto py-6 mr-11">
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
                {ranger?.map((data) => (
                  <tbody>
                    <tr>
                      <th>{data.id_ranger}</th>
                      <td>{data.fullname}</td>
                      <td>{data.phone}</td>
                      <td>{data.status}</td>
                      <td>
                        <button className="text-2xl text-gray-600 ml-4">
                          <ModalEditRanger
                            value={objSubmit.status}
                            onChange={(e) =>
                              handleChange(e.target.value, "status")
                            }
                            onStatus={() => handleStatus(data.id_ranger)}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </section>
            <div className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11">
              <button onClick={(value) => LoadMore(value)}>Load More</button>
              <MdExpandMore className="text-secondary text-xl ml-2" />
            </div>
          </div>
        </div>

        {/* Table New Rangers*/}
        <div className="w-full">
          <div className="overflow-x-auto">
            {/* Text Ranger */}
            <div className="mt-9 mb-6">
              <h5 className="font-semibold text-lg text-secondary mb-2">
                New Rangers
              </h5>
            </div>

            <section className="overflow-x-auto py-6 mr-11">
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
                {data?.map((data) => (
                  <tbody>
                    <tr>
                      <th>{data.id_ranger}</th>
                      <td>{data.fullname}</td>
                      <td>{data.phone}</td>
                      <td>
                        <a href={data.docs} download>
                          See Details
                        </a>
                      </td>
                      <td>
                        <button
                          onClick={() => handleAccept(data.id_ranger)}
                          className="text-2xl text-green-400"
                        >
                          <MdOutlineDownloadDone />
                        </button>
                        <button className="text-2xl text-red-600 ml-4">
                          <AiFillDelete id={data.id_ranger} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </section>
            <div className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11">
              <button onClick={(value) => LoadMoreRanger(value)}>
                Load More
              </button>
              <MdExpandMore className="text-secondary text-xl ml-2" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WithRouter(AdminRanger);
