import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react/dist/iconify.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./carouselSlider.css";

export function CarouselSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container slider-container-first">
            <div className="content-container">
              <div className="content">
                <h4>CroRace 2024:</h4>
                <p>Best cyclist of the world enjoying beauties of Croatia...</p>
                <button>
                  <span>Find out more </span>
                  <span>
                    <Icon
                      icon="mdi:arrow-right-bold"
                      width="1.25em"
                      height="1.25em"
                      style={{ color: "black" }}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container slider-container-second">
            <div className="content-container">
              <div className="content">
                <h4>New Scott Contessa:</h4>
                <p>Best mountain bike for women...</p>
                <button>
                  <span>Find out more </span>
                  <span>
                    <Icon
                      icon="mdi:arrow-right-bold"
                      width="1.25em"
                      height="1.25em"
                      style={{ color: "black" }}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container slider-container-third">
            <div className="content-container">
              <div className="content">
                <h4>Summertime sunset rides:</h4>
                <p>New road bikes for summertime season...</p>
                <button>
                  <span>Find out more </span>
                  <span>
                    <Icon
                      icon="mdi:arrow-right-bold"
                      width="1.25em"
                      height="1.25em"
                      style={{ color: "black" }}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container slider-container-fourth">
            <div className="content-container">
              <div className="content">
                <h4>Interview with Tadej Pogacar:</h4>
                <p>Two time Tour de France winner reveals his secret...</p>
                <button>
                  <span>Find out more </span>
                  <span>
                    <Icon
                      icon="mdi:arrow-right-bold"
                      width="1.25em"
                      height="1.25em"
                      style={{ color: "black" }}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
