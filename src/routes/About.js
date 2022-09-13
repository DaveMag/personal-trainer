import React from "react";
import Navbar from "../components/Navbar";
import MainImage from "../components/MainImage";
import AboutMe from "../components/About";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <MainImage heading={"About me"} />
      <AboutMe />
      <Footer />
    </>
  );
};

export default About;
