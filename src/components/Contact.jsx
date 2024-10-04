import { useInView } from "react-intersection-observer";
import "animate.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqakzaqg");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="contact" className="container mx-auto p-6 mt-10 flex flex-col">
      <h1
        ref={ref}
        className={`title-h1 mx-auto text-4xl font-bold tracking-wide text-slate-900 ${
          inView ? "animate__animated animate__bounceInDown" : ""
        }`}
      >
        Contact Us
      </h1>

      <p
        ref={ref}
        className={`text-center mt-5 text-slate-900 ${
          inView ? "animate__animated animate__bounceInLeft" : ""
        }`}
      >
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="ml-20">
        <div className="flex justify-between items-center mt-5">
          <form
            ref={ref}
            className={`w-full max-w-lg mt-2 ${
              inView ? "animate__animated animate__bounceInLeft" : ""
            }`}
            action=""
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-6">
              <label className="mb-2 font-semibold text-slate-900" htmlFor="email">
                Email Address:
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="mb-2 font-semibold text-slate-900" htmlFor="message">
                Your Message:
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className="px-4 py-2  bg-orange-500 text-white rounded-full hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 transition-all duration-500"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting...." : "Submit"}
            </button>

            {state.succeeded && (
              <p className="flex items-center mt-4 text-lg">
                <img src="/done.gif" alt="" className="w-[5rem]" />
                Your message has been sent successfully!
              </p>
            )}
          </form>

          <div
            ref={ref}
            className={`w-full max-w-lg hidden ml-10 sm:block ${
              inView ? "animate__animated animate__bounceInRight" : ""
            }`}
          >
            <img
              src="/mail.png"
              alt="Mail illustration"
              className="w-[25rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
