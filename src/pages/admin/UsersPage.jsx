import React from "react";
import { Sidebar, NavbarAdmin } from "components/Navbar";

const UsersPage = () => {
  return (
    <main className="mx-auto grid md:grid-flow-col gap-2">
      <aside className="md:grid-col-span-1">
        <Sidebar />
      </aside>

      <article className="md:grid-col-span-2">
        <NavbarAdmin />
      </article>
    </main>
  );
};

export default UsersPage;
