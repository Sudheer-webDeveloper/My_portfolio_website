import React from "react";
import skill1 from "../../assets/skill1.png";
import skill2 from "../../assets/skill2.png";
import skill3 from "../../assets/skill3.png";
import skill4 from "../../assets/skill4.png";
import { motion } from "framer-motion";

const Skills = () => {
  

  return (
    <main className="main-4">
      <h1>Skills</h1>

      <div className="skill-section-4"



      >
        <motion.div className="skill-4"
        
        whileInView={{
            skewX:[50,90,180,180,180],
          }}
        
          transition={{
            duration:3
       
    
          }} >
          <img src={skill1} alt="HTML CSS JS"/>
          <img src={skill2} alt="REACT JS"
           />
          <img src={skill3} alt="EXPRESS AND NODE" 
         />
          <img src={skill4} alt="MONGO DB" 
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;
