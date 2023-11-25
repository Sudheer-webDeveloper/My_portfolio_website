import React from "react";
import img1 from "../../assets/coursera.png";
import img2 from "../../assets/edureka.png";
import img3 from "../../assets/hippoCloud.png";
import img4 from "../../assets/harmony.jpeg";
import { motion } from "framer-motion";

const Education = () => {
  const Variants = {
    initial: {
      scale: 0,
      opacity: 0.2,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        when: "beforeChildren",
      },
    },
  };

  return (
    <main className="main-5">
      <h1>Experience</h1>
      <motion.div
        className="education-5"
        variants={Variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="image-5">
          <img src={img1} alt="coursera Facebook" />
          <div className="content-5">
            <h2>FaceBook Meta</h2>
            <p>
               acquired comprehensive knowledge of the HTTP request and
              response cycle, as well as understanding the intricacies of
              server-side rendering.
            </p>
            <p>
               delved into prominent frontend frameworks such as Bootstrap and
              Tailwind, alongside mastering JavaScript libraries like React
            </p>
            <p>
              This experience significantly heightened my passion for crafting
              fully functional, responsive UIs, emphasizing a seamless user
              experience.
            </p>
          </div>
        </div>

        <div className="image-5">
          <img src={img2} alt="At edureka" />
          <div className="content-5">
            <h2>Edureka</h2>
            <p>
              Developed customizable E-commerce application using React.js,
              Redux, and React Router. This project was designed to be fully
              scalable, maintainable, and responsive across all devices,
              integrating SEO best practices.
            </p>
            <p>
              Actively engaged with experts via Google Meet and email,
              facilitating the exchange of valuable technical insights while
              contributing my knowledge to the collective expertise pool
            </p>
          </div>
        </div>

        <div className="image-5">
          <img
            src={img3}
            alt="At edureka"
            style={{
              padding: "125px",
              objectFit: "contain",
              background: "#ddd",
              filter: "brightness(130%)",
            }}
          />
          <div className="content-5">
            <h2>Harmony Foods</h2>
            <p>
              Throughout the internship program, I gained invaluable insights
              into the implementation of organizational marketing strategies,
              recognizing their pivotal role in the success of respective
              organizations.
            </p>
            <p>
              I delved into methods aimed at enhancing machinery effectiveness,
              reducing reliance on manual labor as a primary resource.
            </p>
            <p>
              This program provided me with foundational knowledge in marketing
              and a deeper understanding of how businesses operate, enriched my
              overall perspective
            </p>
          </div>
        </div>

        <div className="image-5">
          <img
            src={img4}
            alt="At edureka"
            style={{
              padding: "90px",
              objectFit: "cover",
              background: "#ddd",
              filter: "brightness(120%)",
            }}
          />
          <div className="content-5">
            <h2>Harmony Foods</h2>
            <p>
              Throughout the internship program, I gained invaluable insights
              into the implementation of organizational marketing strategies,
              recognizing their pivotal role in the success of respective
              organizations.
            </p>
            <p>
              I delved into methods aimed at enhancing machinery effectiveness,
              reducing reliance on manual labor as a primary resource.
            </p>
            <p>
              This program provided me with foundational knowledge in marketing
              and a deeper understanding of how businesses operate, enriched my
              overall perspective
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Education;
