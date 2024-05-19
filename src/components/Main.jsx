import React from "react";
import bgIcon from "../assets/reactjs-icon-bg.png";
export default function Main() {
  return (
    <>
      <main className="main" style={{ background: `Url(${bgIcon})`, backgroundPosition: "right 75%", backgroundRepeat: "no-repeat" }}>
        <h1>Fun facts about React</h1>
        <ul className="lists">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>

    </>
  )
}