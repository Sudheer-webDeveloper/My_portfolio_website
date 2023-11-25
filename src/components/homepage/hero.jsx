import React from "react";
import Navbar from "./navbar";
import img from "../../assets/portfolio2.png";
import img1 from "../../assets/nobg.png";
import { motion } from "framer-motion";

const Hero = () => {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const variant = {
    begin: {
      x: -300,
      opacity: 0,
    },

    final: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  };

  const slideVariant = {
    begin: {
      x:150,
    },

    final: {
      x:"-190%",
      transition: {
        duration: 14,
        repeatType: "left",
        repeat: Infinity,
        
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="main-2">
        <div className="hero-2">
          <motion.div
            className="content-2"
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.h1 variants={itemVariants}>Hi there,</motion.h1>
            <motion.h2 variants={itemVariants}>I'm Sudheer</motion.h2>
            <motion.p variants={itemVariants}>
              A passionate web developer dedicated to transforming ideas into
              engaging digital experiences. With a blend of creativity and code,
              I craft websites that stand out,passionated to create seamless, user-centric designs.
            </motion.p>
            <motion.p variants={itemVariants}>
              
            </motion.p>
          </motion.div>

          <motion.div
            className="img-section-2"
            variants={variant}
            initial="begin"
            whileInView="final"
          >
            <div className="image-2">
              <img src={img} alt="My_image" />
            </div>
          </motion.div>

          <motion.div
            className="slider-content-2"
            variants={slideVariant}
            initial="begin"
            animate="final"
          >
            <h2>Web Developer and Designer</h2>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
