import React, { useState } from "react";
import Countrys from "./Countrys";

const FirstSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState();

  const options = [
    [
      {
        image: "/images/FirstSectionImg/india_small.png",
        country: "INR",
      },
    ],
    [
      {
        image: "/images/FirstSectionImg/Flag_of_Pakistan_small.svg",
        country: "PKR",
      },
    ],
    [
      {
        image: "/images/FirstSectionImg/Flag_of_the_Philippines_small.svg",
        country: "PHP",
      },
    ],
    [
      {
        image: "/images/FirstSectionImg/Nepal_small.png",
        country: "NPR",
      },
    ],
  ];

  return (
    <div className="First">
      <div className="Section_content_first">
        <div className="Section_content_left">
          <div className="Flags">
            <div>
              <img src="/images/FirstSectionImg/AED.png" alt="/" />
            </div>
            <img src="/images/FirstSectionImg/Group 122.png" alt="/" />
            <div>
              <img src="/images/FirstSectionImg/Flag_of_India.svg" alt="/" />
            </div>
          </div>

          <h1>The Faster and Lower Cost Way To Send Money To India</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
          <div className="First_section_bottom_icons">
            <div className="F_S_B_I">
              <img
                src="/images/FirstSectionImg/Group.png"
                alt="Hand holding a star"
              />
              <div>
                <p>Over 150 reviews on App Stores</p>
                <a href="#">Read What They Said</a>
              </div>
            </div>
            <div className="F_S_B_I">
              <img
                src="/images/FirstSectionImg/purple shield 1.png"
                alt="Purple Shield"
              />
              <div>
                <p>Regulated by ADGM</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Section_content_right">
          <div className="choice">
            <span className="purple">
              <p>BANK TRANSFER</p>
            </span>
            <span>|</span>
            <p>BILL PAYMENT</p>
            <span>|</span>
            <p>AIRTIME TOP UP</p>
          </div>
          <form>
            <div className="form_for_money">
              <p>You Send</p>
              <div className="inside_input__One">
                <img
                  src="/images/FirstSectionImg/united-arab-emirates__small.png"
                  alt="UAE"
                />
                <h3>AED</h3>
              </div>
              <input type="text" name="money" />
              <div className="form_middle">
                <img src="/images/FirstSectionImg/Line 8.png" alt="Line" />
                <p>1AED = 19.87 INR</p>
              </div>
              <p>Recipients get</p>
              <div className="inside_input__Two">
                {selected === "FirstCountry" && (
                  <Countrys option={options} countryIndex={0} />
                )}
                {selected === "SecondCountry" && (
                  <Countrys option={options} countryIndex={1} />
                )}
                {selected === "ThirdCountry" && (
                  <Countrys option={options} countryIndex={2} />
                )}
                {selected === "FourCountry" && (
                  <Countrys option={options} countryIndex={3} />
                )}
                <img
                  src="/images/FirstSectionImg/Vector_dd.png"
                  alt="dropdown"
                  className="dropdown"
                  onClick={(e) => setIsActive(!isActive)}
                />
              </div>
              {isActive && (
                <div className="countrys">
                  <div
                    className="country"
                    onClick={() => setSelected("FirstCountry")}
                  >
                    <img
                      src="/images/FirstSectionImg/india_small.png"
                      alt="small india"
                    />
                    <h3>INR</h3>
                  </div>

                  <div
                    className="country"
                    onClick={() => setSelected("SecondCountry")}
                  >
                    <img
                      src="/images/FirstSectionImg/Flag_of_Pakistan_small.svg"
                      alt="small pakistan"
                    />
                    <h3>PKR</h3>
                  </div>
                  <div
                    className="country"
                    onClick={() => setSelected("ThirdCountry")}
                  >
                    <img
                      src="/images/FirstSectionImg/Flag_of_the_Philippines_small.svg"
                      alt="small Philippine"
                    />
                    <h3>PHP</h3>
                  </div>
                  <div
                    className="country"
                    onClick={() => setSelected("FourCountry")}
                  >
                    <img
                      src="/images/FirstSectionImg/Nepal_small.png"
                      alt="small Nepal"
                    />
                    <h3>NPR</h3>
                  </div>
                </div>
              )}
              <input type="text" name="money" />
              <div className="form_bottom">
                <p>Send Money With Hubpay</p>
                <img src="/images/FirstSectionImg/Vector.png" />

                <button></button>
              </div>
            </div>
          </form>
          <div className="Rates">
            <img src="/images/FirstSectionImg/Vector_01.png" />
            <p>
              Rates shown are for demonstration purposes only. Please refer to
              the app for the most up to date rates.
            </p>
          </div>
        </div>
        <div className="mobile_responssive">
          <div className="F_S_B_I_res">
            <img src="/images/FirstSectionImg/document 2.png" alt="doc" />
            <p>Regulated by ADGM</p>
            <a href="#">Learn More</a>
          </div>
          <div className="F_S_B_I_res">
            <img src="/images/FirstSectionImg/Group.png" alt="hand" />
            <p>Over 150 reviews on App Stores</p>
            <a hrf="#">Read What They Said</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
