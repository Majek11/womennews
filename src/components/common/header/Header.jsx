import React, { useState } from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import "./header.css";


const Header = () => {

    const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/womendiary">Women's diary</Link>
              </li>
              <li>
                <Link to="/genderdata">Gender data</Link>
              </li>
              <li>
                <Link to="/opinins">Opinions</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
            </ul>
            <button className="barIco" onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
        </div>
      </header>
   
    </>
  );
};

export default Header;
