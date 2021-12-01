import React from "react";

import Mobile from "./mobile/Mobile";

const ThirdSection = () => {
  return (
    <div className="Third">
      <div className="Third__section_content">
        <div className="Third__section_left">
          <h2>Transfer money to your family with ease</h2>
          <p>
            Hubpay helps with more than just sending money abroad. You can
            easily make international bill payments and even recharge mobile
            airtime overseas.
          </p>
          <div className="CheckMarks">
            <div className="checkmark">
              <span>&#10003;</span>
              <h4>Super Fast Transfer</h4>
            </div>
            <div className="checkmark">
              <span>&#10003;</span>
              <h4>Easy Repeat Payments</h4>
            </div>
            <div className="checkmark">
              <span>&#10003;</span>
              <h4>International Remittance</h4>
            </div>
            <div className="checkmark">
              <span>&#10003;</span>
              <h4>Great Exchange Rates</h4>
            </div>
          </div>

          <div className="Phone__Store">
            <img
              src="/images/ThirdSectionImg/GoogleStore.png"
              alt="GoogleStore"
            />
            <img
              src="/images/ThirdSectionImg/AppleStore.png"
              alt="AppleStore"
            />
          </div>
        </div>
        <div className="Third__section_right">
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
