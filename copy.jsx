import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
// import myProjects from "./myPorjects.js"
import { useInView } from "react-intersection-observer";
import "animate.css";


const myProjects = [
  {
    id: 1,
    title: "Leon Website",
    cetegory: "Programming projects",
    img: "/images/main/a.png",
    giturl: "https://github.com/tayseer2/HTML---CSS-Leon-Website",
    demo: "https://tayseer2.github.io/HTML---CSS-Leon-Website/",
  },
  {
    id: 2,
    title: "Kasper Website",
    cetegory: "Programming projects",
    img: "/images/main/s.png",
    giturl: "https://github.com/tayseer2/HTML-And-CSS-Kasper-Website-Design",
    demo: "https://tayseer2.github.io/HTML-And-CSS-Kasper-Website-Design/",
  },
  {
    id: 3,
    title: "Elrahhal",
    cetegory: "Programming projects",
    img: "/images/main/d.png",
    giturl: "https://github.com/tayseer2/HTML-And-CSS-Elrahhal",
    demo: "https://tayseer2.github.io/HTML-And-CSS-Elrahhal/",
  },
  {
    id: 4,
    title: "Elrahhal-v2",
    cetegory: "ProgramminProgramming projects",
    img: "/images/main/f.png",
    giturl: "https://github.com/tayseer2/HTML---CSS-Elrahal",
    demo: "https://tayseer2.github.io/HTML---CSS-Elrahal/",
  },
  {
    id: 5,
    title: "QR Code Generator",
    cetegory: "Programming projects",
    img: "/images/main/g.png",
    giturl: "https://github.com/tayseer2/QR-Code-Generator",
    demo: "https://tayseer2.github.io/QR-Code-Generator/",
  },
  {
    id: 6,
    title: "Stop Watch",
    cetegory: "Programming projects",
    img: "/images/main/h.png",
    giturl: "https://github.com/tayseer2/stop-watch",
    demo: "https://tayseer2.github.io/stop-watch/",
  },
  {
    id: 7,
    title: "Password Generator",
    cetegory: "Programming projects",
    img: "/images/main/j.png",
    giturl: "https://github.com/tayseer2/Generate-a-Random-Password",
    demo: "https://tayseer2.github.io/Generate-a-Random-Password/",
  },
  {
    id: 8,
    title: "weather App",
    cetegory: "Programming projects",
    img: "/images/main/k.png",
    giturl: "https://github.com/tayseer2/Weather-App",
    demo: "https://tayseer2.github.io/Weather-App/",
  },
  {
    id: 9,
    title: "tailwindcss desgin",
    cetegory: "Programming projects",
    img: "/images/main/l.png",
    giturl: "https://github.com/tayseer2/React-Tailwindcss",
    demo: "https://tailwindcss-desgin.netlify.app/",
  },
  {
    id: 10,
    title: "Prayer Times",
    cetegory: "Programming projects",
    img: "/images/main/z.png",
    giturl: "https://github.com/tayseer2/prayer-times",
    demo: "https://prayer-times-v0.netlify.app/",
  },
  {
    id: 11,
    title: "E-Commerce",
    cetegory: "Programming projects",
    img: "/images/main/x.png",
    giturl: "https://github.com/tayseer2/Shope-v2",
    demo: "https://shope-v2.netlify.app/",
  },
  {
    id: 12,
    title: "ToDo List!",
    cetegory: "Programming projects",
    img: "/images/main/c.png",
    giturl: "https://github.com/tayseer2/ToDo-List",
    demo: "https://todo-list-020.netlify.app/",
  },
];

export default function Projects() {
  const [currentActive, setcurrentActive] = useState();
  const [allProjects, setAllProjects] = useState(myProjects);

  const filterProjects = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const filteredProjects = myProjects.filter((item) => {
      return item.cetegory.includes(buttonCategory);
    });
    setAllProjects(filteredProjects);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="container mx-auto p-6 flex flex-col gap-10 items-start mt-10 bg-[#faf9f6] py-20">
      <h1
        ref={ref}
        className={`mx-auto text-4xl font-bold tracking-wide ${
          inView ? "animate__animated animate__bounceInDown" : ""
        }`}
      >
        PROJECTS
      </h1>
      <section className="flex justify-center w-full flex-wrap gap-5 container mx-auto">
        <button
          onClick={() => filterProjects("Programming projects")}
          className={`${
            currentActive === "Programming projects"
              ? "opacity-100 bg-orange-500"
              : "opacity-50"
          } bg-[#24252e] text-white tracking-wide min-w-40 min-h-10 text-center text-sm rounded-md transition-all duration-300 hover:bg-slate-900`}
        >
          Programming projects
        </button>

        <button
          onClick={() => filterProjects("JavaScript")}
          className={`${
            currentActive === "JavaScript"
              ? "opacity-100 bg-orange-500"
              : "opacity-50"
          } bg-[#24252e] text-white tracking-wide min-w-40 min-h-10  text-center text-sm rounded-md transition-all duration-300 hover:bg-slate-900`}
        >
          Graphic projects
        </button>
      </section>

      <section className="flex flex-wrap justify-center mt-6 mb-14 gap-8 container mx-auto w-[80%] md:scale-105">
        <AnimatePresence>
          {allProjects.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 8, type: "spring", stiffness: 65 }}
              key={item.id}
              className="card border-2 border-dashed border-orange-500 rounded-md transition-transform transform hover:rotate-1 hover:scale-105 cursor-pointer bg-gradient-to-b from-transparent to-transparent"
            >
              <img
                width={266}
                src="/proj/a.png"
                alt=""
                className="rounded-t-md"
              />
              <div className="box w-[266px] p-4">
                <h1 className="title text-md capitalize font-[600]">
                  {item.title}
                </h1>
                <p className="sub-title text-gray-400 text-sm mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={item.demo}
                      target="_blank"
                      className="icon-link text-sm text-orange-500 hover:text-black"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                  <a className="link text-orange-500 text-sm" href="#">
                    more <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

    </main>
  );
}
