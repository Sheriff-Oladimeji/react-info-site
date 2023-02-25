import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MainContent from "./main";
import Footer from "./footer";
const app = document.getElementById("root");

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

