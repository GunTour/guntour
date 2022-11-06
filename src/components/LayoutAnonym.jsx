import React from 'react'
import Footer from 'components/Footer'
import { Navbar, Sidebar, NavbarAdmin } from 'components/Navbar'

const LayoutAnonym = ({children}) => {
  return (
    <div>
        <Sidebar/>
        <NavbarAdmin/>
        <Navbar/>
        <div className="w-full h-full">{children}</div>
        <Footer/>
    </div>
  )
}

export default LayoutAnonym