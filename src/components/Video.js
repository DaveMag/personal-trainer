import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import Background from "../assets/Background.mp4";

const Video = () => {
  return (
    <div className="back-video">
      <video
        playsinline={true}
        autoplay={true}
        loop={true}
        muted={true}
        id="video"
      >
        <source src={Background} type="video/mp4" />
      </video>
      <div className="content">
        <h1>
          JF Rayo <span className="pop">Personal Training</span>
        </h1>
        <p>Personal Trainer & Group Fitness Instructor</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
