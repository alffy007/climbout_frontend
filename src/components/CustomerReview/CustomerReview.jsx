import React from "react";
import './CustomerReview.css'
import cases from '../../imgs/cases.jpg'
import heroes from '../../imgs/heroes.jpg'
import saved from '../../imgs/saved.jpg'

const CustomerReview = () => {

  return <div className="CustomerReview">
       <div className="updates">
        <div className="cases">
          <div  className="avatar">
            <img src={cases}  style={{width:"40px"}} alt="" />
          </div>
          <h4>No. of cases  <br></br> <span style={{fontSize:"20px"}}> &nbsp; 20</span> </h4>
        </div>

        <div className="saved">
        <div  className="avatar">
            <img src={heroes}  style={{width:"40px"}} alt="" />
          </div>
          <h4>No. of Heroes <br></br><span style={{fontSize:"20px"}}> &nbsp; 1200</span></h4>
        </div>

        <div className="heroes">
        <div  className="avatar">
            <img src={saved}  style={{width:"40px"}} alt="" />
          </div>
          <h4>Life Saved <br></br> <span style={{fontSize:"20px"}}> &nbsp; 17</span> </h4>
        </div>

       </div>
  </div>;
};

export default CustomerReview;
