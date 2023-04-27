import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import Chatbot from '../chatbot/chatbot';

const RightSide = () => {
  return (
    <div className="RightSide">
    <div className="login">
      
    </div>
      <div>
        <h3>Updates</h3>
        <CustomerReview />
      </div>
      <div>
        <h3>Meet you Hero!</h3>
        <Updates />
      </div>
      <Chatbot/>
    
    </div>
  );
};

export default RightSide;
