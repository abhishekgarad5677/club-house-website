import knifeHit from "../../public/banner/knife_hit.png";
import bhideScooterRace from "../../public/banner/bhide_scooter_race.png";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <>
      <div className="mx-20 m-auto">
        <div className="mt-20 text-white space-y-4.5 text-center w-[48%] mx-auto relative">
          <p className="text-[18px] font-bold mb-">Welcome to Club House!</p>
          <h1 className="text-[42px] font-bold">The TMKOC Web3 Game!</h1>
          <p className="mt-2 leading-11 text-[18px] font-bold">
            Relive the laughter, play as your favorite characters, and collect
            exclusive TMKOC-themed rewards in this exciting blockchain
            adventure.
          </p>
          <img
            className="absolute top-0 w-[25%] left-[-40%]"
            src={knifeHit}
            alt=""
          />
          <img
            className="absolute top-0 w-[25%] right-[-40%]"
            src={bhideScooterRace}
            alt=""
          />
        </div>
      </div>
      <BannerSlider />
    </>
  );
};

export default Banner;
