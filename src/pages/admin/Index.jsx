import React from 'react'
import { WithRouter } from "utils/Navigation";
import { NavbarAdmin } from 'components/Navbar';

const AdminProduct = () => {
  return (
    <div>
      <NavbarAdmin/>
    </div>
  )
}

export default WithRouter(AdminProduct);