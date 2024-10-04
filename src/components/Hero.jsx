import { motion } from "framer-motion";
import "animate.css";

export default function Hero() {
  return (
    <div className="container mx-auto p-6 flex justify-between items-center pt-14 space-x-10 flex-col-reverse md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 items-center md:text-left md:items-start text-center text-slate-900">
        <h1 className="animate__animated animate__bounceInLeft font-bold text-3xl md:text-5xl text-slate-900">
          Creative Design and Advanced Programming for Comprehensive Digital
          Solutions
        </h1>
        <p className="animate__animated animate__bounceInLeft text-slate-900">
          We are a cohesive team of programmer and graphic designer working
          together to provide innovative digital solutions. We combine creative
          design skills with programming expertise to develop high-performance
          websites and applications, along with appealing designs that enhance
          your digital identity.
        </p>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ damping: 10, type: "spring", stiffness: 75 }}
        >
          <a
            href=""
            className="bg-orange-500 px-6 py-3 md:mt-4 text-white rounded-full hover:bg-slate-900 transition-all duration-500 ease-in-out w-fit"
          >
            Contact us
          </a>
        </motion.div>
      </div>
      <div className="md:w-1/2">
        <img
          className="animate__animated animate__bounceInRight"
          src="/hero.png"
          alt="hero"
        />
      </div>
    </div>
  );
}
