import Footerbottom from "../assets/footer/Footerbottom.png";
import FooterAnimation from "../assets/footer/FooterAnimation.gif";
import {
  FaDiscord,
  FaInstagramSquare,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bg-top bg-no-repeat bg-cover w-full">
      <div className="grid grid-cols-6 gap-4 pt-10 items-start pb-120 ">
        <div className="flex items-center justify-center">
          <img src={"/common/Logo.png"} alt="" />
        </div>
        <div className="text-white text-left">
          <p className="text-bold text-[18px] mb-6">Quick Links</p>
          <p className="text-[16px] mb-6">Home</p>
          <p className="text-[16px] mb-6">About</p>
          <p className="text-[16px] mb-6">Play</p>
          <p className="text-[16px] mb-6">Whitepaper</p>
          <p className="text-[16px] mb-6">Media Kit</p>
        </div>
        <div className="text-white text-left">
          <p className="text-bold text-[18px] mb-6">Legal</p>
          <p className="text-[16px] mb-6">Terms & Conditions</p>
          <p className="text-[16px] mb-6">Privacy Policy</p>
          <p className="text-[16px] mb-6">Risk Disclosure Policy</p>
          <p className="text-[16px] mb-6">AML & KYC Policy</p>
          <p className="text-[16px] mb-6">TMKOC Economy Protocol</p>
          <p className="text-[16px] mb-6">Business Enquiry</p>
        </div>
        <div className="text-white text-left">
          <p className="text-bold text-[18px] mb-6">Socials</p>
          <p className="text-[16px] mb-6 flex items-center gap-2">
            <FaDiscord size={24} />
            Discord
          </p>
          <p className="text-[16px] mb-6 flex items-center gap-2">
            <FaTelegram size={24} />
            Telegram
          </p>
          <p className="text-[16px] mb-6 flex items-center gap-2">
            <ImLinkedin size={22} />
            LinkedIn
          </p>
          <p className="text-[16px] mb-6 flex items-center gap-2">
            <FaSquareXTwitter size={24} />
            Twitter
          </p>
          <p className="text-[16px] mb-6 flex items-center gap-2">
            <FaInstagramSquare size={26} />
            Instagram
          </p>
          <p className="text-[16px] mb-6 flex items-center gap-2">
            <FaYoutube size={26} />
            Youtube
          </p>
        </div>
        <div className="text-white text-left mr-10 col-span-2 border border-2 border-[#2244FF] p-6 rounded-xl">
          <p className="font-bold text-[18px] mb-6">Contact Us</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-8  text-white border-b border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-8 text-white border-b border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full mb-8 text-white border-b border-gray-600  focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              //   type="button"
              type="submit"
              className="transtion group cursor-pointer flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#2244FF] via-[#A20AF4] to-[#DF9B53] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
            >
              <div className="hidden text-[14px] lg:flex lg:gap-x-12  py-3  px-8 h-full w-full items-center justify-center rounded-full bg-[#17142E] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
      <img
        className="absolute bottom-0 w-[45%] left-0 scale-x-[-1]"
        src={FooterAnimation}
        alt=""
      />
      <img
        className="absolute bottom-0 w-[45%] right-0"
        src={FooterAnimation}
        alt=""
      />
    </div>
  );
};

export default Footer;
