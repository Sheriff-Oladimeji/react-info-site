import React from "react";
import ReactDOM from "react-dom";
import pic from "./logo.svg";
import css from "./style.css"
const app = document.getElementById("root");

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src={pic} width={"40px"} alt="logo" />
        </nav>
      </header>
      <h1>Reasons I'm exicted to learn React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>It's easy to learn for beginners</li>
      </ol>
      <footer>
        <small>&copy; 2023 Sheriff development. All rights reserved</small>
      </footer>
    </div>
  );
}
ReactDOM.render(<Page/>, app)

