import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Card = () => {

 
  return (
    <AnimateSharedLayout>
      <div className="main1">


<motion.div style={{background:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)"}} className="CompactCard">
    <h1>Know it to prevent it</h1>
    <Link  to='/page1'> <UilSignOutAlt className='arrow'/></Link>
   

  </motion.div>
 
  <motion.div style={{background:"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)"}} className="CompactCard">
    <h1>Save A Friend</h1>
    <Link  to='/page2'> <UilSignOutAlt className='arrow1'/></Link>

  </motion.div>
  <motion.div style={{background:"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)"}} className="CompactCard">
    <h1>Report a Drug Sighting</h1>
    <Link  to='/page3'> <UilSignOutAlt className='arrow'/></Link>
  </motion.div>
  </div>
  
    </AnimateSharedLayout>
  );
};

 
export default Card;
