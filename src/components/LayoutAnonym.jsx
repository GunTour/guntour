import React from 'react'
import Footer from 'components/Footer'
import { Navbar } from 'components/Navbar'

const LayoutAnonym = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="w-full h-full">{children}</div>
        <Footer/>
    </div>
  )
}

export default LayoutAnonym