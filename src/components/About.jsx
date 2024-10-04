import { useInView } from "react-intersection-observer";
import "animate.css";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="about" className="container mx-auto p-6 mt-10 flex flex-col">
      <h1
        ref={ref}
        className={`title-h1 mx-auto text-4xl font-bold tracking-wide text-slate-900 ${
          inView ? "animate__animated animate__bounceInDown" : ""
        }`}
      >
        About Us
      </h1>

      <div className="container mx-auto p-4">
        <p
          ref={ref}
          className={`text-center mt-5 text-slate-900 ${
            inView ? "animate__animated animate__bounceInDown" : ""
          }`}
        >
          Merging Graphic Design with Custom Web Development to Elevate Your
          Brand
        </p>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
          <img
            ref={ref}
            className={`w-full md:w-1/2 mt-6 ${
              inView ? "animate__animated animate__bounceInLeft" : ""
            }`}
            src="/about.png"
            alt=""
          />
          <div
            ref={ref}
            className={`mt-4 md:mt-0 md:ml-6 ${
              inView ? "animate__animated animate__bounceInRight" : ""
            }`}
          >
            <p className="mb-12 leading-8 text-gray-700">
              We are a passionate team of web developers and graphic designers
              dedicated to creating exceptional digital experiences. Our mission
              is to merge innovative design with cutting-edge technology,
              delivering tailored web solutions that elevate your brand and
              drive business success. With a commitment to quality and
              collaboration, we strive to understand your unique needs and bring
              your vision to life. Whether you&apos;re looking for a stunning
              website, engaging graphics, or a complete digital strategy,
              we&apos;re here to help you every step of the way.
            </p>
            <a
              href="#"
              className="bg-orange-500 px-6 py-3 text-white rounded-full hover:bg-slate-900 transition-all duration-500 ease-in-out w-fit"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
