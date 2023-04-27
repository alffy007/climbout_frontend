import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import {Link} from 'react-scroll'
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  

  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
       <h2 className="logo1"> <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Climbout</Link></h2>
      </div>

      <div className="menu">
     
            <div
              className={selected == 0 ? "menuItem active" : "menuItem"}
              onClick={() =>{setSelected(0)}}
            >
              <UilEstate/>
              <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </div>
            <div
              className={selected == 1 ? "menuItem active" : "menuItem"}
              onClick={() =>{setSelected(1)}}
            >
              <UilClipboardAlt/>
              <Link to="/Services" spy={true} smooth={true} offset={50} duration={500}>Working</Link>

            </div>
            <div
              className={selected == 2 ? "menuItem active" : "menuItem"}
              onClick={() =>{setSelected(2)}}
            >
              < UilUsersAlt/>
              <span>Contacts</span>
            </div>
          
        
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
