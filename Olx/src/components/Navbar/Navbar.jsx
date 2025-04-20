import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import Heart from "../../assets/Heart"
import { logout } from "../../firebase/firebase";

const Navbar = () => {
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
   
        <div className="brandName">
            <Link to={'/'}>
            <OlxLogo />
              </Link>
        </div>
   
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>

        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>

          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>          
        </div>
        
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        
        <div className="favorate">
              <Heart />
        </div>
        
        <div className="loginPage">
         <h3 onClick={()=>logout()}>Logout</h3>
        </div>
        
          <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <Link to='productAdd'>SELL</Link>
          </div>
          </div>
      
      </div>
    </div>
  );
};

export default Navbar;
