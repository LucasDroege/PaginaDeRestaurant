import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca de nosotros:</p>
        <h1 className="primary-heading">
          La comida es una parte importante de una dieta equilibrada.
        </h1>
        <p className="primary-text">
          Esto es relleno
        </p>
        <p className="primary-text">
          MAs relleno
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Mas informacion...</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Mirar el video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
