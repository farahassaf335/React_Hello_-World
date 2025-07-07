import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={require("../logo.svg")} alt="Logo" className="header-logo" />
      <h1 className="header-title">Hello World App</h1>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
