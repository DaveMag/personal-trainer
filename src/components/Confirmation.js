import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import "./Confirmation.css";

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <h1>
       Thanks for contacting us!
      </h1>
      <p>We'll be in touch with you shortly.</p>
      <BsEmojiSmile size={50} style={{color: '#fff', marginTop: '1.5rem'}} />
    </div>
  );
};

export default Confirmation;
