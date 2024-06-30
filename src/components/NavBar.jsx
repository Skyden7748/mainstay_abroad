import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="images/logo5.png" alt="" />
            {/* <i className="fas fa-code"></i> */}
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item x" >
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    VISA
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/visa">VISA Services</a></li>
    <li><a class="dropdown-item" href="/tourist_visa">Tourist Visas</a></li>
    <li><a class="dropdown-item" href="/student_visa">Student Visas</a></li>
    <li><a class="dropdown-item" href="/business_visa">Business Visas</a></li>
    <li><a class="dropdown-item" href="/work_visa">Work Visas</a></li>
  </ul>
</div>
            </li>
            
            <li className="nav-item x y" >
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Programs
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/programs">All Programs</a></li>
    <li><a class="dropdown-item" href="/ielts">IELTS</a></li>
    <li><a class="dropdown-item" href="/toefl">TOEFL</a></li>
    <li><a class="dropdown-item" href="/pte">PTE</a></li>
    <li><a class="dropdown-item" href="/oet">OET</a></li>
  </ul>
</div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
                
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;