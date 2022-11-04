import React from 'react'
import Footer from './Footer'
import { Navbar } from './Navbar'

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