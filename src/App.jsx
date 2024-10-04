import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
