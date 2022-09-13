import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form method="GET" action="/">
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Training</label>
        <select name="training" className="train-select">
          <option value="">Choose the type of training</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="cardio">Cardio</option>
          <option value="pilates">Pilates</option>
          <option value="prevention">Injury Prevention</option>
          <option value="injury-rehab">Injury Rehabilitation</option>
          <option value="toning">Muscle Toning</option>
        </select>
        <label>Details</label>
        <textarea rows="6" placeholder="Any questions?" />
        <button className="form-btn">Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
