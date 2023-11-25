import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";
import project10 from "../../assets/project10.png";
import project11 from "../../assets/project11.png";
import project12 from "../../assets/project12.png";

const images = [
  project2,
  project9,
  project7,
  project6,
  project8,
  project3,
  project4,
  project5,
  project11,
  project12,
  project10,
];

const Projects = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === 10 ? 0 : slide + 1);
    console.log(slide);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? 10 : slide - 1);
  };

  const itemVariants = {
    initial: {

      scale:0,
      opacity: 0.2,
    },
    animate: {
      opacity: 1,
      scale:1,
      transition: {
        type: "spring",
        damping:20,
      },
    },
  };

  return (
    <main className="main-3">
      <div className="project-3">
        <div className="content-3">
          <h2>My Desired Work</h2>
        </div>

        <motion.div className="image-3" variants={itemVariants} initial="initial" whileInView="animate">
          <button onClick={() => prevSlide()}><IoIosArrowBack /></button>
          <div className="img-container-3">
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="image"
                  key={index}
                  style={{ transform: `translate(-${slide * 420}px)` }}
                />
              );
            })}
          </div>

          <button onClick={() => nextSlide()}><IoIosArrowForward /></button>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
