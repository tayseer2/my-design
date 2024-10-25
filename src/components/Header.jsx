import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [showbBtn, setShowbBtn] = useState(false);
  return (
    <>
      <nav id="home" className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-5">
            <img src="/logo.png" alt="logo" className="w-[20px]" />
            <span className="text-xl font-[600] ml-2">MY Design</span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 hover:text-orange-500 transition-all duration-400 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 hover:text-orange-500 transition-all duration-400 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 hover:text-orange-500 transition-all duration-400 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 hover:text-orange-500 transition-all duration-400 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-orange-500 px-6 cursor-pointer py-2 text-white rounded-full hover:bg-slate-900 transition-all duration-500 ease-in-out"
            >
              Contact us
            </Link>
          </div>

          {/* test */}
          {/* <img
            src="/icon.svg"
            className="w-10 md:hidden text-slate-900 hover:text-orange-500 cursor-pointer text-2xl"
            onClick={() => setShowbBtn(!showbBtn)}
          ></img> */}

          <label className="hamburger md:hidden">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32"
            onClick={() => setShowbBtn(!showbBtn)}
            >
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>

          {/* test */}
        </div>
        {showbBtn && (
          <div className="model md:hidden absolute z-20 bg-gray-50 py-8 left-6 right-6 px-12 space-y-4 drop-shadow-lg border border-gray-300 flex flex-col items-center mt-5 font-bold">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 font-[400] text-[18px] hover:text-orange-500 transition-all duration-400 border-b border-orange-300 w-full text-center pb-5 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 font-[400] text-[18px] hover:text-orange-500 transition-all duration-400 border-b border-orange-300 w-full text-center pb-5 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 font-[400] text-[18px] hover:text-orange-500 transition-all duration-400 border-b border-orange-300 w-full text-center pb-5 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-slate-900 font-[400] text-[18px] hover:text-orange-500 transition-all duration-400 border-b border-orange-300 w-full text-center pb-5 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-orange-500 px-6 py-2 text-white rounded-full hover:bg-slate-900 transition-all ease-in-out"
            >
              Contact us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
