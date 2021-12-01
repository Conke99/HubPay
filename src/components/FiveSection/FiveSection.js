import React from "react";

const FiveSection = () => {
  return (
    <div className="Section__Five">
      <img
        className="bg_img"
        src="/images/FiveSection/Rectangle 21.png"
        alt="background img"
      />
      <div className="Section__Five_content">
        <h2>Send Money to These Countries</h2>
        <div className="Countries">
          <div>
            <div className="circle"></div>
            <img src="/images/FiveSection/egypt 1.png" alt="Flag" />
            <h3>Philippine</h3>
            <p>
              Philippine <span>&#8226;</span> PHP
            </p>
          </div>
          <div>
            <div className="circle"></div>
            <img src="/images/FiveSection/india 2.png" alt="Flag" />
            <h3>Egypt</h3>
            <p>
              Egyptian Pound <span>&#8226;</span> EGP
            </p>
          </div>
          <div>
            <div className="circle"></div>
            <img src="/images/FiveSection/nepal 1.png" alt="Flag" />
            <h3>Pakistan</h3>
            <p>
              Pakistani rupee <span>&#8226;</span> PKR
            </p>
          </div>
          <div>
            <div className="circle"></div>
            <img src="/images/FiveSection/pakistan 1.png" alt="Flag" />
            <h3>Nepal</h3>
            <p>
              Nepalese Rupee <span>&#8226;</span> NPR
            </p>
          </div>
          <div>
            <div className="circle"></div>
            <img src="/images/FiveSection/philippines 1.png" alt="Flag" />
            <h3>India</h3>
            <p>
              Indian rupee <span>&#8226;</span> INR
            </p>
          </div>
        </div>
        <div className="Section__Five_content__bottom">
          <p>© 2020 Hubpay Limited</p>
          <div className="social">
            <div>
              <p>Privacy Policy</p>
              <p>Term & Conditions</p>
            </div>
            <div className="socail__links">
              <a href="https://www.facebook.com" target="_blank">
                <img src="/images/FiveSection/Frame.png" alt="FaceBook" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src="/images/FiveSection/Frame(1).png" alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <img src="/images/FiveSection/Frame(2).png" alt="Twiter" />
              </a>
            </div>
          </div>
        </div>
        <p className="paragraf">
          Hubpay Limited is licensed and regulated by the Financial Services
          Regulatory Authority of Abu Dhabi Global Markets.
        </p>
      </div>
    </div>
  );
};

export default FiveSection;
