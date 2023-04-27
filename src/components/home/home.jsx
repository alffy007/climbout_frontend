import React from 'react'
import Table from '../Table/Table'
import './home.css'
import Cards from "../Card/Card";
import Services from "../services/Services";
import RightSide from '../RigtSide/RightSide';
function home() {
  return (
   <div className="home-main">
    <div className='home'>
    <h1 className='head'>Hey, <br></br>Superhero👋</h1>
    <Table/>
    <Cards/>
    <Services/>
    </div>
    </div>
  )
}

export default home