import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_options">
            <span className="headerLineOne">Hello Raghav</span>
            <span className="headerLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_options">
            <span className="headerLineOne">Returns</span>
            <span className="headerLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_options">
            <span className="headerLineOne">Your</span>
            <span className="headerLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="headerLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
