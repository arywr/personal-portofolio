import React from 'react';
import Menu from './Menu';
import MenuIcons from './MenuIcons';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2 py-md-4 py-lg-5">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Ray
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-lg-5 ms-lg-5">
            <Menu title="Home" active />
            <Menu title="Portofolio" />
            <Menu title="Testimonial" />
            <Menu title="About" />
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <MenuIcons />
              <MenuIcons />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
