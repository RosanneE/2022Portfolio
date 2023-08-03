import React from "react";
import Tabs from "../components/Projects/Tabs";
import {useEffect} from 'react';

function Portfolio(props) {
  useEffect(() => document.body.classList.add("portfoliotPage"));
    return (
    <div className="portfolio">
    <h1 className="title">Portfolio</h1>
    <div className="tabs">
      <Tabs/>
    </div>
    </div>
    )
  }
  
  export default Portfolio;