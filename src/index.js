import React from "react";
import ReactDOM from "react-dom";
import pic from "./logo.svg";

const app = document.getElementById("root");
function Header() {
return(
  <header>
        <nav className="nav">
          <img src={pic}  alt="logo" className="logo"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
)

}
function MainContent(){
  return(
<div>
<h1>Reasons I'm exicted to learn React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>It's easy to learn for beginners</li>
      </ol>
</div>
  )
}
function Footer(){
  return (
    <footer>
        <small>&copy; 2023 Sheriff development. All rights reserved</small>
      </footer>
  )
}
function Page() {
  return (
    <div>
   <Header/>
     <MainContent/>
     <Footer/> 
    </div>
  );
}
ReactDOM.render(<Page/>, app)

