import React from 'react'
import "./subnavbar.css";
import Arrow from "../../assets/Arrow";

function Subnavbar() {
  return (
    <div className='subnav'>
       <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow /> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
    </div>
  );
}

export default Subnavbar
