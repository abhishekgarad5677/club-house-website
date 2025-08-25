import Playstorebutton from "../../public/get_our_app/Playstorebutton.png";
import Applebutton from "../../public/get_our_app/Applebutton.png";
import Device from "../../public/get_our_app/Device.png";
import gameSlider from "../../public/get_our_app/games-slider.gif";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";
import knifeHit from "../../public/banner/swiper-images/8ball_break.png";

const GetApp = () => {
  return (
    <div className="mx-20">
      <div className="get-app pt-50 w-[100%] mx-auto p-6">
        <div className="relative p-[2px] rounded-4xl overflow-hidden shadow-[0_0_20px_rgba(162,10,244,0.5)] bg-gradient-to-r from-[#2244FF] via-[#A20AF4] to-[#DF9B53] animate-spin-slow">
          <div className="w-full h-full rounded-4xl bg-[#17142E] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900">
            <div className="hidden lg:flex pt-16 pb-32 px-10 flex-col w-full h-full items-start justify-start">
              <p className="text-white text-[18px] mb-5">Get Our App</p>
              <h1 className="text-white text-[42px] mb-4">
                Take the TMKOC Fun Anywhere!
              </h1>
              <p className="text-white text-[18px] mb-4 w-[45%] text-left">
                Play the TMKOC Web3 Game on the go! Explore Gokuldham Society,
                meet your favorite characters, take on fun missions, and compete
                with friends.
              </p>
              <p className="text-white text-[18px] mb-12 w-[50%] text-left">
                Start your adventure now—download and dive in!
              </p>
              <div className="grid w-[40%] grid-cols-2">
                <div>
                  <img
                    className="w-[92%] cursor-pointer"
                    src={Playstorebutton}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-[92%] cursor-pointer"
                    src={Applebutton}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[100px] w-[70%] bottom-40 right-[1.5%]">
            <div className="relative w-full h-full">
              <img
                className="absolute w-[100%] right-[-15%] bottom-[-450%]"
                src={gameSlider}
                alt=""
              />
              {/* <Swiper
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
                autoplay={{
                  delay: 4000, // Delay between slides (in milliseconds)
                  disableOnInteraction: false, // Keep autoplay even after interacting with the slider
                }}
                loop={true} // Enable looping of slides
                initialSlide={3} // This will start the slider at the 4th slide (index starts from 0)
                modules={[Autoplay]}
                className="mySwiper"
                breakpoints={{
                  320: { slidesPerView: 1.5, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 12 },
                  640: { slidesPerView: 2.5, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 0 },
                  1024: { slidesPerView: 3, spaceBetween: 10 },
                }}
              >
                <SwiperSlide>
                  <img
                    className="w-full h-full object-contain"
                    src={knifeHit}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full h-full object-contain"
                    src={knifeHit}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full h-full object-contain"
                    src={knifeHit}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full h-full object-contain"
                    src={knifeHit}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-full h-full object-contain"
                    src={knifeHit}
                  />
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
