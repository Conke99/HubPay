import React from "react";

const Countrys = ({ countryIndex, option }) => {
  return (
    <div>
      {option[countryIndex].map((item) => (
        <div>
          <img src={item.image} />
          <h3>{item.country}</h3>
        </div>
      ))}
    </div>
  );
};

export default Countrys;
