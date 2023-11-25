import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6"

const Contact = () => {
    const [data,setData]  = useState({
        firstname:"",
        lastname:"",
        email:"",
        message:"",
    })


    function handleSubmit (e){
     e.preventDefault();
     console.log(data)
     setData({
        firstname:"",
        lastname:"",
        email:"",
        message:"",
     })
    }
    

    function handleChange(e){
        const {name,value} = e.target
        setData((prevData)=>{
           return {...prevData,[name]:value}
        })
    }



    const itemVariants = {
        initial: {
          opacity: 0,
          y:600
        },
        animate: {
          opacity: 1,
          y:0,
          transition: {
            type: "spring",
            damping:25,
          },
        },
      };



//variants={itemVariants} initial="initial" whileInView="animate"
  return (
    <footer>
      <motion.div className="random-section" >
        <motion.form className="contact-6" onSubmit={handleSubmit}>
          <div className="left-contact-6">
            <h1>Let's Connect!</h1>
            <p>
              Interested in full time Work and freelance services? Questions
              about specific projects? Contact me and I,ll do my best to get
              back to you quickly.
            </p>
          </div>
          <div className="right-contact-6">
            <div className="firstname-1">
              <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" value={data.firstname}  name="firstname" onChange={handleChange}/>
              </div>

              <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" value={data.lastname} name="lastname" onChange={handleChange}/>
              </div>
            </div>

            <div className="email-6">
              <label htmlFor="email">Email</label>
              <input type="eamil"  id="email" required value={data.email} name="email" onChange={handleChange}/>
            </div>
            <div className="text-area-6">
              <label htmlFor="message">Message (required)</label>
              <textarea id="message" value={data.message} name="message" onChange={handleChange}/>
            </div>

            <button type="submit">Submit</button>
          </div>
        </motion.form>

      <div className="main-contact">
        <div className="content-6">
        <div className="our-email-6">
          <h1>Email:</h1>
          <h2>sudheertalaudi@gmail.com</h2>
        </div>
       
       <div className="our-email-6">
        <h1>Ph:no :</h1>
        <h2>9676234130</h2>
       </div>
        </div>
        <motion.a href={`#Home`}  initial={{
                  y: -30,    
                  opacity: 0.3,
                }}
                animate={{
                  y: 10,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}><FaArrowUp /></motion.a>
      </div>
      </motion.div>

    </footer>
  );
};

export default Contact;
