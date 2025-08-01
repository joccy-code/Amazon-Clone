import React from "react";

const CatagoryCart = ({ data }) => {
  return (
    <div>
      <a href="">
        <span>
          <h2>{data.title}</h2>
          <img src={data.imgLink} alt="Image" />
          <p>shop now</p>
        </span>
      </a>
    </div>
  );
};

export default CatagoryCart;
