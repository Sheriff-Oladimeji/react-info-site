import React from "react";
import ReactDOM from "react-dom";
const app = document.getElementById("root");
// const page = (
//   <div>
//     <h1 className="header">React Intro</h1>
//     <p>Learning react fundamentals</p>
//   </div>
// )
const page = (
  <div>
    <img src="./profile.png" alt="profile"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, app);
