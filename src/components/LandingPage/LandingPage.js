import React from 'react';
import './LandingPage.css';
import { motion } from "framer-motion";
import banner from '../../assets/banner2.png'
import element1 from '../../assets/element-1.png'
import element2 from '../../assets/element-2.png'
import element3 from '../../assets/element-3.png'

function LandingPage() {
  return (
    <>
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className='yellow'>Together</span> we
        </motion.h1>
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          can make a
          <br/>
          Difference.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's secure our daughters future by providing quality <br /> education and health.Let's subscribe.
        </motion.p> 
        </div>
        <div className='landing-right'>
            <img src={banner} className='banner'  />
             
            
            

        </div>
        
    </div>
    <div className='element'>
    <motion.img
          src={element1}
          className="element1"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity
          }}
          ></motion.img>
          <motion.img
          src={element2}
          className="element2"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity
          }}
          ></motion.img>
          <motion.img
          src={element3}
          className="element3"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity
          }}
          ></motion.img>
            
        </div>
    </>
  )
}

export default LandingPage
