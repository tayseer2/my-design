import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full mx-auto p-6 mt-10 bg-slate-900 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="social flex justify-center items-center gap-6 mb-5 flex-wrap">
          <a
            target="_blank"
            href="https://www.instagram.com/my.desgin46?igsh=MW1xc3N0M2NhY2sy"
            className="bg-orange-500 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=""
            className="bg-orange-500 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href=""
            className="bg-orange-500 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://t.me/mydesgin46"
            target="_blank"
            className="bg-orange-500 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>

        <ul className="flex justify-center items-center gap-8 mb-5 flex-wrap">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-orange-500 transition-all duration-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-orange-500 transition-all duration-500 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-orange-500 transition-all duration-500 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-orange-500 transition-all duration-500 cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-orange-500 transition-all duration-500 cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <p className="copyRight text-center">
          © {currentYear} <span className="text-orange-500">MY DESIGN</span>.
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
