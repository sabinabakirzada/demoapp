import { SearchOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <h1 className="h-h1">Shapely Demo</h1>
      <ul className="h-ul">
        <li>HOME</li>
        <li>BLOG</li>
        <li>PORTFOLIO</li>
        <li>ABOUTTHETSTS</li>
        <li>LEVEL</li>
        <li>SHOP</li>
        <li>
          <p className="h-p">
            <SearchOutlined />
          </p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
