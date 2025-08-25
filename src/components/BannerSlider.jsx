import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";
import knifeHit from "../../public/banner/swiper-images/8ball_break.png";
import abdulsort from "../../public/banner/swiper-images/abdulsort.png";
import Basketballbliz from "../../public/banner/swiper-images/Basketballbliz.png";
import BhideScooter from "../../public/banner/swiper-images/BhideScooter.png";
import BubbleShooter from "../../public/banner/swiper-images/BubbleShooter.png";
import dietmatch from "../../public/banner/swiper-images/dietmatch.png";
import FruitDart from "../../public/banner/swiper-images/FruitDart.png";
import JumpBhideJump from "../../public/banner/swiper-images/JumpBhideJump.png";
import liquidsort from "../../public/banner/swiper-images/liquidsort.png";

const BannerSlider = () => {
  return (
    <div className="w-full mt-20 flex justify-center items-center banner-slider">
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        // autoplay={{
        //   delay: 4000, // Delay between slides (in milliseconds)
        //   disableOnInteraction: false, // Keep autoplay even after interacting with the slider
        // }}
        loop={true} // Enable looping of slides
        initialSlide={5} // This will start the slider at the 4th slide (index starts from 0)
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 2.5, spaceBetween: 15 },
          768: { slidesPerView: 3.5, spaceBetween: 18 },
          1024: { slidesPerView: 9, spaceBetween: 0 },
        }}
      >
        <SwiperSlide>
          <img src={abdulsort} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Basketballbliz} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BhideScooter} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BubbleShooter} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dietmatch} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JumpBhideJump} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liquidsort} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JumpBhideJump} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liquidsort} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abdulsort} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Basketballbliz} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BhideScooter} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BubbleShooter} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dietmatch} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JumpBhideJump} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liquidsort} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FruitDart} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liquidsort} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
