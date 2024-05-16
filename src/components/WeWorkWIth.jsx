import React from "react";

const WeWorkWIth = () => {
  return (
    <div className="flex flex-col justify-between items-center lg:mt-20 gap-12 relative">
      {/* <img src="leftSideBlueSemiCircle.svg" alt="half blue circle" className="absolute left-0" /> */}
      <div className="flex flex-col justify-between items-center gap-1 w-[90%] xl:w-[100%]">
        <p className="text-[#0A80DA] font-semibold text-lg xl:text-xl">
          \We Work With\
        </p>
        <p className="text-slate-800 font-bold text-3xl xl:text-4xl text-center">
          The best companies in the world
        </p>
      </div>
      <div className="flex md:flex-col lg:flex-row gap-3 xl:gap-12 xl:flex-row">
        <div className="flex flex-col md:flex-row xl:flex-row gap-6 xl:gap-12">
          <img src="/view.svg" alt="" />
          <img src="/seguoia.svg" alt="" />
          <img src="/eicher.svg" alt="" />
        </div>
        <div className="flex flex-col md:flex-row xl:flex-row gap-6 xl:gap-12">
          <img src="/swiggy.svg" alt="" />
          <img src="/view.svg" alt="" />
          <img src="/seguoia.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeWorkWIth;
