import React from "react";
import "./Services.css";
import Card from "../card1/Card";
import { motion } from "framer-motion";

const Services = () => {
  // context

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>Working</span>
        <spane>
          A Triangle System to Prevent, Rehabilate, Report Drug usage and illegal activities.  
          <br />
          
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "32rem" }}
          transition={transition}
        >
          <Card
            heading={"Authorities"}
            detail={"Diffrent authorities , NGO's , Anti-drug cell are the control panel of our platform who can take desicions based on report"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "25rem",  }}
          whileInView={{ left: "-4em" }}
          transition={transition}
        >
          <Card
            heading={"Students"}
            detail={"Our platform work on the user activity and Students are our Primary Users."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ left: "12rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            heading={"Teachers"}
            detail={
              "Teachers play a crucial role in the devolopment of a student, Our platform make sure the teachers to reach who needs help "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       </div>
    </div>
  );
};

export default Services;
