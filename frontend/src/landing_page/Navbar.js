import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  border-bottom mt-2 sticky-top" style={{backgroundColor: "#fff"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className='mb-2' src='/assets/logo.svg' alt='logo' style={{width: "130px"}}/>
        </Link>
        
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

        <div className="collapse navbar-collapse justify-content-end mb-2" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;