import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__left">
        <span className="fs__18px color__ffffff"> Life Saviour</span>
      </div>
      <div>
        <ul className="navBar__right">
          <li>
            <a className="navItem fs__14px color__ffffff" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navItem fs__14px color__ffffff" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li>
            <a className="navItem fs__14px color__ffffff" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
