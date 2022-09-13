import React from "react";
import Footer from "../components/Footer";
import MainImage from "../components/MainImage";
import Train from "../components/Training";
import Navbar from "../components/Navbar";

const Training = () => {
  return (
    <>
      <Navbar />
      <MainImage heading={"Training"} text={"Trainings I specilize in"} />
      <Train />
      <Footer />
    </>
  );
};

export default Training;
