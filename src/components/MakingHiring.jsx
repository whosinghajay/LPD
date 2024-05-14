import React from "react";

const MakingHiring = () => {
  return (
    // first
    <div className="flex flex-col justify-between items-center mt-[5rem] sm:mt-[10rem] gap-12">
      <div className="flex flex-col justify-between items-center gap-1">
        <p className="text-[#0A80DA] font-semibold text-xl">\Making Hiring\</p>
        <p className="text-slate-800 font-bold text-3xl sm:text-4xl">
          A Breeze With Dutech
        </p>
      </div>

      {/* second */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 transform scale-95 sm:scale-100">
        <p className="h-[253px] w-[370px] flex place-items-center justify-center text-white font-semibold text-xl bg-[url('/specificationImage.svg')]">
          Specification
        </p>
        <p className="h-[253px] w-[370px] flex place-items-center justify-center text-white font-semibold text-xl bg-[url('/discussionImage.svg')]">
          Discussion
        </p>
        <p className="h-[253px] w-[370px] flex place-items-center justify-center text-white font-semibold text-xl bg-[url('/deploymentImage.svg')]">
          Deployment
        </p>
      </div>
    </div>
  );
};

export default MakingHiring;
