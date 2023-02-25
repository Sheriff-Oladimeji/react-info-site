import React  from "react"
export default  function Header() {
  return(
    <header>
          <nav className="nav">
            <img src="./logo.svg"  alt="logo" className="logo"/>
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
  )
  
  }
 