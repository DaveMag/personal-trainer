import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import Ball from "../assets/ball.jpg";
import Injury from "../assets/injury-prevention.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>INSTRUCTOR</h2>
        <p className="instructor">
          I am an open-minded, positive and proactive person. I combine
          directing, coaching pedagogy, and teaching in team sports. After
          obtaining a Sports Science degree from the European University of
          Madrid, I have developed an international career. My coaching vocation
          began as an instructor in the Madrid football federation. This was the
          jump I was looking for, which allowed me to develop my communication
          and technical skills. My first big break came as the Head coordinator
          for Chelsea FC in Madrid, where I was promoted to Technical Director
          after less than a year. In 2007, a position as a Head Coach and
          Coordinator was offered by the prestigious Barça Academy in Leesburg,
          USA. This position has allowed me to lead a team of coaches and manage
          academy programs, including soccer camps. I returned to Spain in 2017.
          I now dedicate myself to training people personally and according to
          their needs. Not everyone is as fortunate as me to be able to do what
          they love as a career.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Injury} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Ball} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
