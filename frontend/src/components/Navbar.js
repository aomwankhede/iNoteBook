import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(`You are in page with path ${location.pathname}`);
  }, [location]);
  return (
    <>
      <nav
        style={{ borderRadius: "2px", backgroundColor: "#0f1218" }}
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            iNoteBook
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-dark " to="/login" role="button">Login</Link>
              <Link className="btn btn-dark mx-2" to="/signup" role="button">Signup</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
