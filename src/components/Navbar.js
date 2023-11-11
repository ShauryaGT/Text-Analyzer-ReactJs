import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${window.location.href.split("/").pop() == "" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${window.location.href.split("/").pop() == "about" ? "active" : ""}`} to="/about">{props.aboutText}</Link>
              </li>              
            </ul>
            {/* switch for mode change */}
            <div class={`form-check form-switch mx-3 ${(props.mode == "dark") ? "text-light" : "text-dark"}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontSize : 14 + 'px'}}>Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string}
Navbar.defaultProps = {
  title : "Set Title Here",
  aboutText : "About",
  mode : "light"
}            