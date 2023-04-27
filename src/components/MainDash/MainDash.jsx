import React from "react";
import Cards from "../Card/Card";
import Table from "../Table/Table";
import Page2 from '../page2/Form';
import Page3 from '../page3/Form';
import Page1 from '../page1/Page1'
import Home from "../home/home";
import Services from "../services/Services";
import "./MainDash.css";
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Searchbar from "../Searchbar/searchbar";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Searchbar/>
   <Router>
    <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<Page1/>} path='/page1'/>
    <Route element={<Page2/>} path='/page2'/>
    <Route element={<Page3/>}path='/page3'/>
    </Routes>
   </Router>
    </div>
  );
};

export default MainDash;
