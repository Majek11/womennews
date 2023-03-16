import React from "react";
import "./footer.css";
import Logo from "../header/Logo-removebg-preview 1 (1).png";

const Footer = ({ title }) => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src={Logo} alt="" />
            {/* <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p> */}
            <i className="fa fa-envelope"></i>
            <span> info@womeninnews.ng</span> <br />
            {/* <i className='fa fa-headphones'></i> */}
            <span> </span>
          </div>
          <div className="box">
            <h3>FEATURED</h3>
            <div className="item">
              <img src="../images/hero/Cov.jpeg" alt="" />
              <p>Women to look out for in Saturday Elections</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Rural Women in Nigeria Want 35% Affirmative Compliance</p>
            </div>
          </div>
          <div className="box">
            <h3>NEWS</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>Polls: Our future is bleak - Ebonyi women</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero4.jpg" alt="" />
              <p>Borno female voters seek more appointments in government.</p>
            </div>
          </div>
          {/* <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>
            The Women
            {/* made with <i className='fa fa-heart'></i> by gorkhcoder */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
