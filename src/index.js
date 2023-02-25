import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const app = document.getElementById("root");

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
    <footer className="footer">
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

