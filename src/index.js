import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./style.css";
const page = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  return (
    <div>
      <App />
    </div>
  );
}
page.render(<Page />);
