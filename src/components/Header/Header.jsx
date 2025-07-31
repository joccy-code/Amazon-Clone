import React from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-1">
            <div>
              <a href="#">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
                  alt="Amazon logo"
                />
              </a>
            </div>
            <div className="location">
              <p className="deliver">Deliver to </p>

              <p className="ethiopia">
                <CiLocationOn />
                Ethiopia
              </p>
            </div>
          </div>
          <div className="nav-2">
            <div className="nav__options">
              <select name="department" id="all">
                <option value="department">All </option>
                <option value="arts">Arts & Crafts</option>
                <option value="automotive">Automotive</option>
                <option value="baby">Baby</option>
                <option value="beauty">Beauty & Personal Care</option>
                <option value="books">Books</option>
                <option value="boysfashion">Boy's Fashion</option>
                <option value="computer">Computers</option>
                <option value="deals">Deals</option>
                <option value="digital">Digital Music</option>
                <option value="electronics">Electronics</option>
                <option value="girls">Girl's Fashion</option>
                <option value="health">Health & Household</option>
                <option value="industry">Industry & Scientific</option>
                <option value="kind">Kindle Store</option>
                <option value="luggage">Luggage</option>
                <option value="mensfashion">Men's Fashion</option>
                <option value="movie">Movies & TV</option>
                <option value="music">Music, CDs & Vinyl</option>
              </select>
            </div>
            <div className="search-input">
              <input
                type="text"
                name="search"
                id=""
                placeholder="Search Amazon"
              />
            </div>
            <div className="search-icon">
              <IoIosSearch className="search-icon" />
            </div>
          </div>
          <div className="nav-3">
            <div className="lang">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png"
                alt="American flag"
              />
              <p>EN</p>
              <FaCaretDown />
            </div>
            <div className="sign-in">
              <p className="hello">Hello, sign in</p>
              <p className="account">
                Account & Lists
                <FaCaretDown />
              </p>
            </div>
            <div className="order">
              <p className="hello">Returns &</p>
              <p className="account">Orders</p>
            </div>
            <div className="cart">
              <IoCartOutline className="cart_logo" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
