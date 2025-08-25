import icon1 from "../assets/game_highlights/icon1.png";
import icon2 from "../assets/game_highlights/icon2.png";
import icon3 from "../assets/game_highlights/icon3.png";
import icon4 from "../assets/game_highlights/icon4.png";
import bg1 from "../assets/game_highlights/bg1.png";
import bg2 from "../assets/game_highlights/bg2.png";
import coin from "../assets/game_highlights/coin.png";

const GameHighlights = () => {
  return (
    <div className="game-highlights py-30">
      <h2 className="text-white text-center text-[42px] font-bold mb-6">
        What Makes It Fun?
      </h2>
      <h1 className="text-white text-center text-[62px] font-bold mb-30">
        Game Highlights
      </h1>

      <div className="relative h-[600px] w-4xl mx-auto">
        <img
          className="absolute bottom-30 right-[-10%] z-80 w-[25%]"
          src={bg1}
          alt=""
        />
        <img
          className="absolute bottom-[-30%] left-1/2 z-80 w-[20%] transform -translate-x-1/2"
          src={bg2}
          alt=""
        />

        <div className="group h-80 w-[50%] absolute rotate-[5deg] [perspective:1000px] overflow-hidden z-50">
          <div className="relative w-full h-full  duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute border-2 border-[#2244FF] w-full h-full [backface-visibility:hidden] bg-[#17142E] rounded-xl shadow-lg flex flex-col justify-center items-center">
              <img
                src={icon1}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h3 className="text-white text-[24px] font-bold">Earn Unique NFTs</h3>
            </div>
            <div className="absolute w-full h-full border-2 border-[#2244FF] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#17142E] rounded-xl shadow-lg flex items-center flex-col justify-center p-4">
              <img
                src={icon1}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h5 className="text-white text-center text-[18px] mb-4">
                Play as Iconic Characters
              </h5>
              <p className="text-white text-center text-[14px]">
                Step into the world of Gokuldham Society and choose from your
                favorite characters like Jethalal, Daya, Popatlal, Taarak Mehta,
                and others. Each character brings their unique charm, abilities,
                and hilarious adventures, making every moment in the game an
                exciting experience!
              </p>
            </div>
            <img
              className="absolute bottom-[-16%] right-[-16%]"
              src={coin}
              alt=""
            />
          </div>
        </div>

        <div className="group h-80 w-[50%] absolute top-0 right-0 rotate-[-7deg] [perspective:1000px] overflow-hidden">
          <div className="relative w-full h-full  duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute border-2 border-[#2244FF] w-full h-full [backface-visibility:hidden] bg-[#17142E] rounded-xl shadow-lg flex flex-col justify-center items-center">
              <img
                src={icon2}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h3 className="text-white text-[24px] font-bold">
                Explore Gokuldham Society
              </h3>
            </div>
            <div className="absolute w-full h-full border-2 border-[#2244FF] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#17142E] rounded-xl shadow-lg flex items-center flex-col justify-center p-4">
              <img
                src={icon2}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h5 className="text-white text-center text-[18px] mb-4">
                Play as Iconic Characters
              </h5>
              <p className="text-white text-center text-[14px]">
                Step into the world of Gokuldham Society and choose from your
                favorite characters like Jethalal, Daya, Popatlal, Taarak Mehta,
                and others. Each character brings their unique charm, abilities,
                and hilarious adventures, making every moment in the game an
                exciting experience!
              </p>
            </div>
            <img
              className="absolute bottom-[-16%] right-[-16%]"
              src={coin}
              alt=""
            />
          </div>
        </div>

        <div className="group h-80 w-[50%] absolute bottom-[-8%] left-0 rotate-[-3deg] [perspective:1000px] overflow-hidden">
          <div className="relative w-full h-full  duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute border-2 border-[#2244FF] w-full h-full [backface-visibility:hidden] bg-[#17142E] rounded-xl shadow-lg flex flex-col justify-center items-center">
              <img
                src={icon3}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h3 className="text-white text-[24px] font-bold">Earn Unique NFTs</h3>
            </div>
            <div className="absolute w-full h-full border-2 border-[#2244FF] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#17142E] rounded-xl shadow-lg flex items-center flex-col justify-center p-4">
              <img
                src={icon3}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h5 className="text-white text-center text-[18px] mb-4">
                Play as Iconic Characters
              </h5>
              <p className="text-white text-center text-[14px]">
                Step into the world of Gokuldham Society and choose from your
                favorite characters like Jethalal, Daya, Popatlal, Taarak Mehta,
                and others. Each character brings their unique charm, abilities,
                and hilarious adventures, making every moment in the game an
                exciting experience!
              </p>
            </div>
            <img
              className="absolute bottom-[-16%] right-[-16%]"
              src={coin}
              alt=""
            />
          </div>
        </div>

        <div className="group h-80 w-[50%] absolute bottom-[-10%] right-0 rotate-[7deg] [perspective:1000px] overflow-hidden">
          <div className="relative w-full h-full  duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute border-2 border-[#2244FF] w-full h-full [backface-visibility:hidden] bg-[#17142E] rounded-xl shadow-lg flex flex-col justify-center items-center">
              <img
                src={icon4}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h3 className="text-white text-[24px] font-bold">
                Engage in Exciting Gameplay
              </h3>
            </div>
            <div className="absolute w-full h-full border-2 border-[#2244FF] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#17142E] rounded-xl shadow-lg flex items-center flex-col justify-center p-4">
              <img
                src={icon4}
                alt="Front"
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
              <h5 className="text-white text-center text-[18px] mb-4">
                Play as Iconic Characters
              </h5>
              <p className="text-white text-center text-[14px]">
                Step into the world of Gokuldham Society and choose from your
                favorite characters like Jethalal, Daya, Popatlal, Taarak Mehta,
                and others. Each character brings their unique charm, abilities,
                and hilarious adventures, making every moment in the game an
                exciting experience!
              </p>
            </div>
            <img
              className="absolute bottom-[-16%] right-[-16%]"
              src={coin}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHighlights;
