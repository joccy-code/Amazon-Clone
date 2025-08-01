import React from "react";
import CatagoryCart from "./CatagoryCart";
import {catagoryImage} from "./catagoryFillInfo";

const Catagory = () => {
  return <div>
     {
        catagoryImage.map((infos, index) => (
          <CatagoryCart data={infos} />
        ))
     }
  </div>;
};

export default Catagory;
