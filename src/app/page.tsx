import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Journal from "../components/Journal";
import Footer from "../components/Footer";
import HeroImg from "../../public/img/header/022.jpg";
import WhyUs from "@/components/WhyUs";
import PhoneButton from "@/components/PhoneNumber";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={{ position: "relative", height: "100vh", width: "100%" }}>
        <Image
          src={HeroImg}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
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
