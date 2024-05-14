import React from "react";
import Hero from "../components/Hero";
import WeWorkWIth from "../components/WeWorkWIth";
import MakingHiring from "../components/MakingHiring";
import WhyChoose from "../components/WhyChoose";
import Discover from "../components/Discover";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-full">
      <div className="max-w-[1440px] mx-auto">
        <Hero />
        <WeWorkWIth />
        <MakingHiring />
        <WhyChoose />
        <Discover />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
