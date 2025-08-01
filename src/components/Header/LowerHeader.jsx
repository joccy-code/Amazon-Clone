import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div>
      <div className={classes.lower_container}>
        <ul>
          <li>
            <RxHamburgerMenu />
            All
          </li>
          <li>Today's Deals</li>
          <li>Registration</li>
          <li>Prime Video</li>
          <li>Gift Cards</li>
          <li>Customer Service</li>
          <li>Sell</li>
        </ul>
      </div>
    </div>
  );
};

export default LowerHeader;
