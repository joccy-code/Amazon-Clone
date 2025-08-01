import React from "react";
import classes from "./Header.module.css";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <div className={classes.nav_1}>
            <div>
              <a href="#">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
                  alt="Amazon logo"
                />
              </a>
            </div>
            <div className={classes.location}>
              <p className={classes.deliver}>Deliver to </p>

              <p className={classes.ethiopia}>
                <CiLocationOn />
                Ethiopia
              </p>
            </div>
          </div>
          <div className={classes.nav_2}>
            <div className={classes.nav_options}>
              <select name="department" id={classes.all}>
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
            <div className={classes.search_input}>
              <input
                type="text"
                name="search"
                id=""
                placeholder="Search Amazon"
              />
            </div>
            <div className={classes.search_icon}>
              <IoIosSearch className={classes.search_icon} />
            </div>
          </div>
          <div className={classes.nav_3}>
            <div className={classes.lang}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png"
                alt="American flag"
              />
              <p>EN</p>
              <FaCaretDown />
            </div>
            <div className={classes.sign_in}>
              <p className={classes.hello}>Hello, sign in</p>
              <p className={classes.account}>
                Account & Lists
                <FaCaretDown />
              </p>
            </div>
            <div className={classes.order}>
              <p className={classes.hello}>Returns &</p>
              <p className={classes.account}>Orders</p>
            </div>
            <div className={classes.cart}>
              <IoCartOutline className={classes.cart_logo} />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
