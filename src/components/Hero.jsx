import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row xl:flex-row xl:justify-between items-center h-[500px] xl:h-[700px] mt-4 md:mt-[-3em] lg:mt-[0em] xl:mt-0">
      {/* first div */}
      <div className="flex flex-col justify-between items-center w-[90%] md:w-[50%] xl:w-[50%] relative">
        <img
          src="/lightPinkCircle.svg"
          alt="Light Pink Color"
          width={180}
          className="absolute top-[-4em] left-[-3em] md:top-[-3em] md:left-[-1em] lg:top-[-5em] lg:left-[0em] xl:top-[-3em] xl:left-[5em]"
        />
        <div className="xl:w-[65%] md:pl-[2em] xl:pl-[0em]">
          {/* first sub div */}
          <div className="flex flex-col gap-2">
            <p className="text-[#0A80DA] font-semibold text-lg xl:text-xl">
              \Hire Prominent\
            </p>
            <p className="text-slate-800 font-bold text-3xl xl:text-5xl">
              DYNAMIC Engineers
            </p>
            <p className="text-[1rem] xl:text-[1.3rem]">
              We are a Wealth of Experience To Provide You With Efficient
              Talent 
            </p>
            <div className="border-2 rounded-full flex justify-between h-12 xl:h-14">
              <input
                type="text"
                placeholder="Your work mail id"
                className="ml-5 outline-none"
              />
              <button className="bg-[#0A80DA] min-w-[101px] text-white flex gap-3 justify-between items-center border rounded-full px-[0.5em] xl:px-5 my-[0.15rem]">
                <span className="text-sm xl:text-lg">Hire Now</span>
                <FaArrowRight size={12} />
              </button>
            </div>
          </div>
          {/* second sub div */}
          <div className="hidden md:block xl:block relative md:top-[5em] xl:top-[10em]">
            <div className="flex gap-1">
              <img src="/starImg.svg" alt="stars" />
              <span className="text-lg text-slate-400 font-medium">
                20,000+ reviews
              </span>
            </div>
            <div className="flex transform scale-75 ">
              <img src="/google-ar21.svg" alt="google image" />
              <img src="/clutchsvg.svg" alt="clutch image" width={100} />
            </div>
          </div>
        </div>
      </div>

      {/* second div */}
      <div className="w-[50%] md:w-[50%] relative pt-12 xl:pt-0">
        <img
          src="/peopleNlike.svg"
          alt="peopleNlike Image"
          className="absolute top-[0.5em] md:top-[3em] lg:top-[4em] xl:top-[4em] left-[10em] md:left-[18em] lg:left-[24em] xl:left-[36em] transform scale-75 lg:scale-100 xl:scale-100"
        />
        <img
          src="/heroSectionImg1.svg"
          alt="Hero Section Image"
          className="transform scale-150 md:scale-100 lg:scale-100 xl:scale-100 "
        />
        <img
          src="/nameNexp.svg"
          alt="nameNexp Image"
          className="absolute top-[10em] md:top-[16em] lg:top-[22em] xl:top-[31em] left-[6em] md:left-[11em] lg:left-[16em] xl:left-[22em] transform scale-75 md:scale-50 lg:scale-90 xl:scale-100"
        />
      </div>
    </div>
  );
};

export default Hero;
