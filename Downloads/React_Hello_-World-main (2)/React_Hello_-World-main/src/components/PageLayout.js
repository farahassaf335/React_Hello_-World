import React from "react";
import './PageLayout.css';
const PageLayout = ({ header, sidebar, main, footer }) => {
  return (
    <div className="page-layout">
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;