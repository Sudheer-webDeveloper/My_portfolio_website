import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from '../../assets/logo2.png'
import { FaCircleDot } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  const links = ["Home", "Skills", "Projects", "Experience", "Contact"];

  const [menu, setMenu] = useState(false);

  console.log(menu);

  const variants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      display: menu ? "flex" : "none",
      // width: menu ? "60vw" : 0,
      height: menu ? "93vh" : 0,
      transition: {
        type: "spring",
        damping: menu ? 20 : 20,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren:0.2,
      },
    },
  };

  return (
    <nav className="home-1">
      <div className="navbar">
        <div className="nav-left-1">
          <div className="logo-1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="links-1">
            <a href="https://drive.google.com/file/d/1TmGZU4CLNv63vkX2Ud6FkfCihK7DI_-I/view?usp=sharing" target="_blank">Resume</a>
            <a href="https://www.linkedin.com/in/talapudisudheer99/" target="_blank">LinkedIn</a>
            
            <a href="https://github.com/Sudheer-webDeveloper" target="_blank">Github</a>
          </div>
        </div>

        <div className="nav-right-1">
          <div className="menu-1">
            <button onClick={() => setMenu(!menu)}><TiThMenu /></button>
          </div>
          <motion.div
            className="menu-square-1"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <motion.div className="menu-links-1" variants={itemVariants} initial="initial" whileInView="animate">
              {links.map((link, index) => {
                return (
                  <motion.a
                    href={`#${link}`}
                    variants={itemVariants}
                    key={index}
                  >
                    <span><FaCircleDot /></span>{link}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="nav-page-links-1" style={{display:"none"}}>
            {links.map((link, index) => {
              return (
                <a href={`#${link}`} key={index}>
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
