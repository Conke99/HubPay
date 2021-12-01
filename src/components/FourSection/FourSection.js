import React, { useState } from "react";

const FourSection = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  return (
    <div className="Four">
      <img
        className="avatar__One"
        src="/images/FourSectionImg/Group 135.png"
        alt="Avatar"
      />
      <img
        className="avatar__Two"
        src="/images/FourSectionImg/Group 134.png"
        alt="Avatar"
      />
      <img
        className="avatar__Three"
        src="/images/FourSectionImg/Group 136.png"
        alt="Avatar"
      />
      <div className="Questions">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
        <div className="Question__Choices">
          <div className="Question__One">
            <div
              className="Question__One__content"
              onClick={() => setOpenOne(!openOne)}
            >
              <div></div>
              <h3>How Safe is HubPay?</h3>
              <img src="/images/FourSectionImg/Vector.png" alt="ArrowDown" />
            </div>
            <p
              className={
                openOne ? "question-submenu clicked" : "question-submenu"
              }
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="border__bottom"></div>
          </div>
          <div className="Question__Two">
            <div
              className="Question__Two__content"
              onClick={() => setOpenTwo(!openTwo)}
            >
              <div></div>
              <h3>What verification do I need to send money?</h3>
              <img src="/images/FourSectionImg/Vector.png" alt="ArrowDown" />
            </div>
            <p
              className={
                openTwo ? "question-submenu clicked" : "question-submenu"
              }
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="border__bottom"></div>
          </div>
          <div className="Question__Three">
            <div
              className="Question__Three__content"
              onClick={() => setOpenThree(!openThree)}
            >
              <div></div>
              <h3>How long will it take for my money to arrive?</h3>
              <img
                src="/images/FourSectionImg/Vector.png"
                alt="ArrowDown"
                onClick={() => setOpenThree(!openThree)}
              />
            </div>
            <p
              className={
                openThree ? "question-submenu clicked" : "question-submenu"
              }
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSection;
