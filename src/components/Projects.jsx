import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main id="projects" className="container mx-auto p-6 flex flex-col py-20">
      <h1
        ref={ref}
        className={`title-h1 mx-auto text-3xl sm:text-4xl font-bold tracking-wide text-slate-900 ${
          inView ? "animate__animated animate__bounceInDown" : ""
        }`}
      >
        PROJECTS
      </h1>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
        <div
          ref={ref}
          className={`px-5 py-6 border border-orange-500 rounded-lg w-full sm:w-[500px] shadow-md text-center ${
            inView ? "animate__animated animate__bounceInLeft" : ""
          }`}
        >
          <h1 className="text-xl sm:text-2xl text-slate-900 leading-8 sm:leading-10">
            To view our{" "}
            <span className="text-orange-500">graphic projects</span> please
            click on the button below.
          </h1>
          <img
            src="/arrow.gif"
            alt=""
            className="arrow mx-auto my-6 sm:my-8 w-[7rem]"
          />
          <a
            href="https://dev-tayseer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white text-sm sm:text-md px-10 py-3 sm:px-16 sm:py-3 rounded-lg hover:bg-slate-900 transition-all duration-500 ease-in-out"
          >
            Visit
          </a>
        </div>

        <div
          ref={ref}
          className={`px-5 py-6 border border-orange-500 rounded-lg w-full sm:w-[500px] shadow-md text-center ${
            inView ? "animate__animated animate__bounceInRight" : ""
          }`}
        >
          <h1 className="text-xl sm:text-2xl text-slate-900 leading-8 sm:leading-10">
            To view our{" "}
            <span className="text-orange-500">graphic projects</span> please
            click on the button below.
          </h1>
          <img
            src="/arrow.gif"
            alt=""
            className="arrow mx-auto my-6 sm:my-8 w-[7rem]"
          />
          <a
            href="https://t.me/mydesgin46"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white text-sm sm:text-md px-10 py-3 sm:px-16 sm:py-3 rounded-lg hover:bg-slate-900 transition-all duration-500 ease-in-out"
          >
            Visit
          </a>
        </div>
      </div>
    </main>
  );
}
