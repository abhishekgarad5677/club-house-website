import Bhide_poses from "../../public/play_connect/Bhide_poses.png";
import phone1 from "../../public/play_connect/phone1.png";
import phone2 from "../../public/play_connect/phone2.png";
import phone3 from "../../public/play_connect/phone3.png";
import icon from "../../public/play_connect/icon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Use Autoplay only

const phoneSlides = [
  {
    img: phone1,
    label: "Log In or Register Create your account to start",
    icon,
  },
  {
    img: phone2,
    label: "Log In or Register Create your account to start",
    icon,
  },
  {
    img: phone3,
    label: "Log In or Register Create your account to start",
    icon,
  },
];

const PlayConnect = () => {
  return (
    <div className="play-connect mt-20 px-6 text-white relative">
      <h1 className="text-center text-[62px] font-bold mb-10 leading-[130px]">
        Play, Connect, and Earn <br /> It's Easy!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]} // ✅ Autoplay added
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // ✅ 5 seconds autoplay
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="w-full"
        >
          {phoneSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={slide.img}
                  alt={`Phone ${index + 1}`}
                  className="w-[66%] mb-6"
                />
                <img src={slide.icon} alt="icon" className="w-12 mt-4" />
                <p className="mt-2 text-[20px] font-medium text-center">
                  {slide.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bhide Static Image */}
        <div className="flex justify-center">
          <img src={Bhide_poses} alt="Bhide Pose" className="w-[74%]" />
        </div>
      </div>
    </div>
  );
};

export default PlayConnect;
