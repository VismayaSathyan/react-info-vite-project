import React from "react";
import logo from "../assets/react-logo.svg";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="nav">

          <img className="nav--logo" src={logo} alt="React Logo" />
          <h2 className="nav--logo-text">ReactFacts</h2>

          <h3 className="nav--title">React Course - Project 1</h3>
        </nav>
      </header >
    </>
  )
}