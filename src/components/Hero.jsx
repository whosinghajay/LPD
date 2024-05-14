import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center h-[500px] sm:h-[700px] mt-4 sm:mt-0">
      {/* first div */}
      <div className="flex flex-col justify-between items-center w-[90%] sm:w-[50%] relative">
        <img
          src="/lightPinkCircle.svg"
          alt="Light Pink Color"
          width={180}
          className="absolute top-[-4em] left-[-3em] sm:top-[-3em] sm:left-[5em]"
        />
        <div className="sm:w-[65%]">
          {/* first sub div */}
          <div className="flex flex-col gap-2">
            <p className="text-[#0A80DA] font-semibold text-lg sm:text-xl">
              \Hire Prominent\
            </p>
            <p className="text-slate-800 font-bold text-3xl sm:text-5xl">
              DYNAMIC Engineers
            </p>
            <p className="text-[1rem] sm:text-[1.3rem]">
              We are a Wealth of Experience To Provide You With Efficient
              Talent 
            </p>
            <div className="border-2 rounded-full flex justify-between h-12 sm:h-14">
              <input
                type="text"
                placeholder="Your work mail id"
                className="ml-5 outline-none"
              />
              <button className="bg-[#0A80DA] text-white flex gap-2 justify-between items-center border rounded-full px-6 sm:px-5 my-[0.15rem]">
                <span className="text-sm sm:text-lg">Hire Now</span>{" "}
                <FaArrowRight />
              </button>
            </div>
          </div>
          {/* second sub div */}
          <div className="hidden sm:block relative top-[10em]">
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
      <div className="w-[50%] relative pt-12 sm:pt-0">
        <img
          src="/peopleNlike.svg"
          alt="peopleNlike Image"
          className="absolute top-[0.5em] sm:top-[4em] left-[10em] sm:left-[36em] transform scale-75 sm:scale-100"
        />
        <img src="/heroSectionImg1.svg" alt="Hero Section Image" className="transform scale-150 sm:scale-100 "/>
        <img src="/nameNexp.svg" alt="nameNexp Image" className="absolute top-[10em] sm:top-[31em] left-[6em] sm:left-[22em] transform scale-75 sm:scale-100" />
      </div>
    </div>
  );
};

export default Hero;
