import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Pages from "./pages";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary tex-color">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            BOOKS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/pages">
                Pages
              </Link>
              <Link class="nav-link" to="/test">
                Test
              </Link>
      
            </div>
          </div>
        </div>
      </nav>

      {/* <nav>
               <Link to="/">Home</Link>
               <Link to="/pages">Pages</Link>
               <Link to="/footer">Footer</Link>
               <Link to="/test">Test</Link>
               <Link to="/about">About</Link>

           </nav> */}
           
    </div>
  );
};

export default Header;
