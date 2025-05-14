"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Team />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
