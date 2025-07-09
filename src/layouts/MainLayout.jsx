import React from "react";
import '../styles/MainLayout.css'; 

const MainLayout = ({ header, sidebar, main, footer }) => {
  return (
    <div className="page-layout">
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default MainLayout;
