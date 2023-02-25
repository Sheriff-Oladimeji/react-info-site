import React from "react"
import logo from "./images/logo.png"
export default function Navbar(){
  return(
<header className="header">
  <nav>
    <img src={logo} alt="" className="image"/>
    <p>React Course - Project 1</p>
  </nav>
</header>
  )
}