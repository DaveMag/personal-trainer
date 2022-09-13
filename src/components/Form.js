import React from "react";
import "./Form.css";

const ContactForm = () => {
  return (
    <div className="form">
      <form novalidate action={process.env.PUBLIC_URL + "/confirmation"}>
        <label>Your Name</label>
        <input required type="text" />
        <label>Email</label>
        <input required type="text" />
        <label>Training</label>
        <select required name="training" className="train-select">
          <option value="">Choose the type of training</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="cardio">Cardio</option>
          <option value="pilates">Pilates</option>
          <option value="prevention">Injury Prevention</option>
          <option value="injury-rehab">Injury Rehabilitation</option>
          <option value="toning">Muscle Toning</option>
        </select>
        <label>Inquires</label>
        <textarea rows="6" placeholder="Any questions?" />
        <button className="form-btn" type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
