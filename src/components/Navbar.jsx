import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPhoneAlt } from "react-icons/fa";
import {  MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Get App", href: "/services", dropdown: true },
    { name: "Top Features", href: "/contact" },
    { name: "How It works", href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 mx-20 m-auto">
      {/* routes navbar */}
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link to={"/"}>
            <img className="h-[70px]" alt="" src={'/common/Logo.png'} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-3 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-9" />
          </button>
        </div>
        <button
          type="button"
          className="transtion group flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#2244FF] via-[#A20AF4] to-[#DF9B53] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
        >
          <div className="hidden lg:flex lg:gap-x-12  py-4 px-10 h-full w-full items-center justify-center rounded-full bg-[#17142E] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
            {navigation.map((item) => (
              <div key={item.name} className="relative group z-30">
                <Link
                  to={item.href}
                  className="text-[14px]  text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </button>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="transtion group cursor-pointer flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#2244FF] via-[#A20AF4] to-[#DF9B53] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
          >
            <div className="hidden text-[14px] lg:flex lg:gap-x-12  py-3  px-8 h-full w-full items-center justify-center rounded-full bg-[#17142E] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
              Connect Wallet
            </div>
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* <a href="javascript:;">
              <span className="sr-only">Your Company</span>
            </a> */}
            <Link className="-m-1.5 p-1.5" to={"/"}>
              <img className="h-[100px]" alt="" src={'/common/Logo.png'} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 mb-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-1 justify-start items-center gap-5">
              <a
                href="https://wa.me/9223262947"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp
                  size={38}
                  className="text-yellow-400 hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/pt.prabhat" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform duration-300"
              >
                <BiLogoInstagramAlt size={40} className="text-yellow-400" />
              </a>
              <a
                href="https://www.facebook.com/pt.prabhat?locale=hi_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={32}
                  className="text-yellow-400 hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="mailto:ptprabhat111@gmail.com"
                className="text-yellow-400 hover:scale-110 transition-transform duration-300"
              >
                <MdEmail size={38} />
              </a>
              <a
                href="tel:+9197638678921"
                className="text-yellow-400 hover:scale-110 transition-transform duration-300"
              >
                <FaPhoneAlt size={26} />
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
