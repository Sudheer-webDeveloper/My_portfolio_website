import React from 'react'
import img1 from "../assets/coursera.png";
import img2 from "../assets/edureka.png";
import img3 from "../assets/hippoCloud.png";
import img4 from "../assets/harmony.jpeg";





const Project2 = () => {
  return (
     <div className="experince-7">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={img1} alt="Facebook META" />
            </div>
            <div className="flip-card-back">
                <p className="title">BACK</p>
                <p className="title-1">Leave Me</p>
            </div>
        </div>
    </div>


      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={img1} alt="Facebook META" />
            </div>
            <div className="flip-card-back">
                <p className="title">BACK</p>
                <p className="title-1">Leave Me</p>
            </div>
        </div>
    </div>

    
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={img1} alt="Facebook META" />
            </div>
            <div className="flip-card-back">
                <p className="title">BACK</p>
                <p className="title-1">Leave Me</p>
            </div>
        </div>
    </div>
     </div>
  )
}

export default Project2
