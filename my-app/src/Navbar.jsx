import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {' '}
          <img className="logo1" src="https://i.gifer.com/Yp1I.gif" alt="/" />
          {' '}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/heroes"><p className="logotext">Rick and Morty</p></NavLink>
            {/* <NavLink className="nav-link" to="/episode">Episode</NavLink> */}
          </div>
        </div>
      </div>
    </nav>

  );
}
