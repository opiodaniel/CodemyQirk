// import { Link } from "react-router-dom";
import Hero from "./homecomponents/Hero";
// import Features from "./homecomponents/Features";
import Testimonials from "./homecomponents/Testimonials";
import CTA from "./homecomponents/CTA";
import Footer from "./homecomponents/Footer";
import CourseListing from "./homecomponents/CourseListing";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      {/* <Features /> */}
      <CourseListing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
