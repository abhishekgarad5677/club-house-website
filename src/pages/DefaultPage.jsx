import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import GameHighlights from "../components/GameHighlights";
import GetApp from "../components/GetApp";
import Navbar from "../components/Navbar";
import PlayConnect from "../components/PlayConnect";
import Silk from "../utils/Silk";

const DefaultPage = () => {
  return (
    <div className="relative h-full" style={{ backgroundColor: "#121251" }}>
      {/* Silk Canvas as background */}
      <div className="absolute inset-0">
        <Silk
          color="#121251"
          // color="#30305F"
          speed={7}
          scale={0.5}
          noiseIntensity={0.2}
          rotation={0}
        />
      </div>

      {/* Your content */}
      <div className="relative h-full bg-[url(/common/doodle.png)] bg-center bg-no-repeat bg-cover z-10 pt-10">
        <Navbar />
        <Banner />
        <AboutUs />
        <GetApp />
        <GameHighlights />
        <PlayConnect />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default DefaultPage;
