import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/header.css";
import {Link } from 'react-router-dom';

const Header = () => {


  return (
    <>
    <div className="header">
      <div className="logo">
        <h2>Cover</h2>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contacts">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
    </>
  );
};

export default Header;
