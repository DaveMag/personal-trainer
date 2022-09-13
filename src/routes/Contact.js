import React from "react";
import Navbar from "../components/Navbar";
import MainImage from '../components/MainImage';
import Footer from "../components/Footer";
import ContactForm from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImage
        heading={"Contact us"}
        text={"I am looking forward to meeting you!"}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
