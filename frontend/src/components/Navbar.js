import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let history = useNavigate();
  useEffect(() => {
    console.log(`You are in page with path ${location.pathname}`);
  }, [location]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
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
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn btn-dark " to="/login" role="button">
                  Login
                </Link>
                <Link className="btn btn-dark mx-2" to="/signup" role="button">
                  Signup
                </Link>
              </form>
            ) : (
              <Link
                onClick={handleLogout}
                className="btn btn-dark mx-2"
                to="/login"
                role="button"
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
