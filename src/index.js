import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import MainContent from "./main";
import Footer from "./footer";
import "./style.css"
const page = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <Header/>
     <MainContent/>
     <Footer/> 
    </div>
  );
}
page.render(<App/>)

