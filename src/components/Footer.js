import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaSearchLocation
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Madrid
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              123456789
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              rayo@personaltraining.com
            </h4>
          </div>
        </div>
        <div className="right">
          <Link to="/">
            <div className="logo">
              <h2>
                JF
                <AiOutlineThunderbolt
                  size={50}
                  style={{
                    color: "#fff",
                    fontWeight: 400,
                    paddingBottom: 0,
                    position: "relative",
                    top: 4,
                    left: -5,
                  }}
                />
              </h2>
              <p>Personal Training</p>
            </div>
          </Link>
          <div className="social">
            <FaFacebook
              size={28}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
            <FaLinkedin
              size={28}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
            <FaTwitter
              size={28}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
