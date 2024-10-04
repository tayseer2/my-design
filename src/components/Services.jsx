import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="services" className="container mx-auto p-6 mt-10 flex flex-col">
      <h1
        ref={ref}
        className={`title-h1 mx-auto text-4xl font-bold tracking-wide text-slate-900 ${
          inView ? "animate__animated animate__bounceInDown" : ""
        }`}
      >
        SERVICES
      </h1>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
        <div
          ref={ref}
          className={`px-5 py-6 border border-orange-500 rounded-lg w-full sm:w-[500px] shadow-md ${
            inView ? "animate__animated animate__bounceInLeft" : ""
          }`}
        >
          <i className="fa-solid fa-code text-[5rem] text-orange-500"></i>
          <h1 className="mt-10 mb-2 uppercase text-lg text-slate-900">
            Programming
          </h1>
          <p className="tracking-wide text-[#404040] mb-2">
            Programming interactive websites using the latest programming
            techniques.
          </p>
        </div>

        <div
          ref={ref}
          className={`px-5 py-6 border border-orange-500 rounded-lg w-full sm:w-[500px] shadow-md ${
            inView ? "animate__animated animate__bounceInRight" : ""
          }`}
        >
          <i className="fa-solid fa-brush text-[5rem] text-orange-500"></i>
          <h1 className="mt-10 mb-2 uppercase text-lg text-slate-900 ">
            Graphic design
          </h1>
          <p className="tracking-wide text-[#404040] mb-2">
            Logo design, visual identities, social media designs, book design,
            presentations, and all types of printed materials.
          </p>
        </div>
      </div>
    </div>
  );
}
