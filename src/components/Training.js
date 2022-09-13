import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";

import WeightLoss from "../assets/weight-loss.jpg";
import Cardio from "../assets/cardio.jpg";
import Pilates from "../assets/pilates.jpg";
import Prevention from "../assets/prevention.jpg";
import Rehabilitation from "../assets/rehabilitation.jpg";
import Toning from "../assets/toning.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="card-container">
        <div className="card">
          <h3>- Weight Loss -</h3>
          <p className="aboutIt">
            Losing weight is not always easy, and often people do not manage to
            maintain it over time. If you plan to lose those extra kilos,
            consider this program. In this program, you will initially be
            assessed for both your weight and the physical composition of your
            body.
          </p>
          <img src={WeightLoss} className="img" alt="" />
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>- Cardio -</h3>
          <p className="aboutIt">
            Setting up an effective cardio fitness program can be daunting. With
            us, you will improve your resistance, as well as your
            cardiorespiratory system. By specific strategies of your workouts
            both with your coach and without him, you will surely achieve your
            goals.
          </p>
          <img src={Cardio} className="img" alt="Cardio Fitness" />
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>- Pilates -</h3>
          <p className="aboutIt">
            Even though Pilates targets the core, every exercise utilizes all of
            the muscles in your body. It's effective for toning up, building
            lean muscles, and improving posture through an individualized
            program under close supervision. It can be beneficial for your
            physical and mental health.
          </p>
          <img src={Pilates} className="img" alt="Pilates Class" />
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>- prevention -</h3>
          <p className="aboutIt">
            Prevention should be a part of all your physical activities. We won't
            only help you achieve your training goals but also keep you sound
            and safe. Performing exercises without the proper preparation can
            easily hurt your body and play a risk to your physical and mental
            health.
          </p>
          <img src={Prevention} className="img" alt="" />
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>- Rehabilitation -</h3>
          <p className="aboutIt">
            Rehabilitation after an injury could be a slow step-by-step process
            for a person to recover. The main focus of this program is to help
            you live as good a life as possible. We'll be looking at helping you
            regain your strength, relearn basic skills, or improve your mobility
            again.
          </p>
          <img src={Rehabilitation} className="img" alt="" />
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>- MUSCLE TONING -</h3>
          <p className="aboutIt">
            Having your muscles toned usually involves strength training, cardio
            fitness, and a healthy diet. Toning involves a whole-body workout
            with exercises that basically are physical training aimed at
            developing a physique with the main emphasis on the musculature.
          </p>
          <img src={Toning} className="img" alt="" />
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;
