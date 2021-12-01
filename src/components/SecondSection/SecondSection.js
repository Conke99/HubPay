import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

const SecondSection = () => {
  const swiper = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      332: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      382: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      460: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },

      496: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },

      790: {
        slidesPerView: 1.6,
        spaceBetween: 10,
      },

      972: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      1168: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },

      1346: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  };

  const items = [
    {
      id: 1,
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor...",
      img: "/images/SecondSectionImg/Vector_small_star.png",
      user: "Jonathan Trell",
    },
    {
      id: 2,
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor...",
      img: "/images/SecondSectionImg/Vector_small_star.png",
      user: "Kurnia Jack Majid",
    },
    {
      id: 3,
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor...",
      img: "/images/SecondSectionImg/Vector_small_star.png",
      user: "Jualipo Yuriname",
    },
    {
      id: 4,
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor...",
      img: "/images/SecondSectionImg/Vector_small_star.png",
      user: "Jualipo Yuriname",
    },
    {
      id: 5,
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor...",
      img: "/images/SecondSectionImg/Vector_small_star.png",
      user: "Kurnia Jack Majid",
    },
  ];

  return (
    <div className="Second">
      <div className="Section__two_content">
        <div className="Section__two_top">
          <div className="Section__two_left">
            <h2>What Our Users Say</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>
          <div className="Section__two_right">
            <div className="Stars">
              <img src="/images/SecondSectionImg/Vector_star.png" alt="Star" />
              <img src="/images/SecondSectionImg/Vector_star.png" alt="Star" />
              <img src="/images/SecondSectionImg/Vector_star.png" alt="Star" />
              <img src="/images/SecondSectionImg/Vector_star.png" alt="Star" />
              <img src="/images/SecondSectionImg/Vector_star.png" alt="Star" />
            </div>
            <p>
              Score <span>4.6 | Google Play</span>
            </p>
          </div>
        </div>
      </div>

      <div className="Section__two_bottom">
        <Swiper
          spaceBetween={swiper.spaceBetween}
          slidesPerView={swiper.slidesPerView}
          breakpoints={swiper.breakpoints}
        >
          {items.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="items">
                <h3>{user.title}</h3>
                <div className="small_stars">
                  <img src={user.img} alt="small stars" />
                  <img src={user.img} alt="small stars" />
                  <img src={user.img} alt="small stars" />
                  <img src={user.img} alt="small stars" />
                  <img src={user.img} alt="small stars" />
                </div>
                <p>{user.user}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SecondSection;
