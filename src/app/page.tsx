import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Journal from "../components/Journal";
import Footer from "../components/Footer";
import { Metadata } from "next";
import HeroImg from "../../public/img/header/022.jpg";
import WhyUs from "@/components/WhyUs";
import PhoneButton from "@/components/PhoneNumber";

const bgImage: React.CSSProperties = {
  backgroundImage: `url(${HeroImg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
  height: "100vh",
  width: "100%",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      <Explore />
      <WhyUs />
      <Journal />
      <Footer />
      <PhoneButton />
    </div>
  );
}
