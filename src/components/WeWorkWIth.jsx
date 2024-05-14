import React from "react";

const WeWorkWIth = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-10 sm:mt-20 gap-12 relative">
         {/* <img src="leftSideBlueSemiCircle.svg" alt="half blue circle" className="absolute left-0" /> */}
      <div className="flex flex-col justify-between items-center gap-1 w-[90%] sm:w-[100%]">
        <p className="text-[#0A80DA] font-semibold text-lg sm:text-xl">\We Work With\</p>
        <p className="text-slate-800 font-bold text-3xl sm:text-4xl">The best companies in the world</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
        <img src="/view.svg" alt="" />
        <img src="/seguoia.svg" alt="" />
        <img src="/eicher.svg" alt="" />
        <img src="/swiggy.svg" alt="" />
        <img src="/view.svg" alt="" />
        <img src="/seguoia.svg" alt="" />
      </div>
    </div>
  );
};

export default WeWorkWIth;
