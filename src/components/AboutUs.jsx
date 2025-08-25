import Lottie from "lottie-react";
import coinAnimation from "../utils/Coins.json";

const AboutUs = () => {
  return (
    <div className="mx-20">
      <div className="about-us mt-40 text-center text-white mx-auto w-[65%] space-y-4 relative">
        <div className="flex justify-center mb-6">
          <img src="/common/Logo.png" alt="Logo" />
        </div>
        <p className="text-[18px] font-bold">About Us</p>
        <h1 className="text-[44px] font-bold">What is the TMKOC Web3 Game?</h1>
        <p className="text-[18px] font-bold tracking-wide leading-8">
          The TMKOC Web3 Game brings the beloved Taarak Mehta Ka Ooltah Chashmah
          universe to life with vibrant, interactive gameplay. Explore Gokuldham
          Society, interact with your favorite characters, and enjoy missions
          inspired by the show’s humor and drama.
        </p>
        <p className="text-[18px] font-bold tracking-wide leading-8">
          With blockchain technology, players can own and trade in-game assets
          as NFTs, ensuring true ownership. Unlock special items, complete
          challenges, and earn rewards with real-world value in this immersive
          gaming experience.
        </p>
        <Lottie
          className="absolute top-10 left-[-36%] w-[36%]"
          animationData={coinAnimation}
          loop={true}
        />
        <Lottie
          className="absolute top-10 right-[-36%] w-[36%] rotate-360"
          animationData={coinAnimation}
          loop={true}
        />
        {/* <img
          className="absolute top-10 left-[-36%] w-[36%]"
          src={coins}
          alt=""
        />
        <img
          className="absolute top-10 right-[-36%] w-[36%] rotate-180"
          src={coins}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default AboutUs;
