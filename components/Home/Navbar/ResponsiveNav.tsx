
'use client'
import { useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./page"

const ResponsiveNav = () => {
  const [showNav,setShowNav]=useState(false)

  const showNavbarHandler=()=>setShowNav(true)
  const closeNavbarHandler=()=>setShowNav(false);
  return (
    <div>
       
        <Nav openNav={showNavbarHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavbarHandler}/>
    </div>
  )
}

export default ResponsiveNav
