import React from "react";

const Discover = () => {
  return (
    <div className="flex flex-col justify-between items-center sm:gap-9 mt-[3rem] sm:mt-[7rem]">
      <div className="flex flex-col justify-between items-center gap-1">
        <p className="text-[#0A80DA] font-semibold text-lg sm:text-xl">\Discover\</p>
        <p className="text-slate-800 font-bold text-3xl sm:text-4xl">
          What you're looking for
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:grid grid-rows-2 grid-flow-col sm:gap-6 transform scale-90">
        <div className="bg-[#F7F7F7] p-6 w-[21.5rem] h-[17.9rem] flex flex-col gap-4 border-2">
          <img src="/frontEnd.svg" alt="" className="" width={50} />
          <p className="font-semibold">Front End</p>
          <img src="/underBreakLine.svg" alt="" className="" width={100} />
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout
          </p>
        </div>
        <div className="bg-[#F7F7F7] p-6 w-[21.5rem] h-[17.9rem] flex flex-col gap-4 border-2">
          <img src="/uiux.svg" alt="" className="" width={50} />
          <p className="font-semibold">UI / UX Design</p>
          <img src="/underBreakLine.svg" alt="" className="" width={100} />
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout
          </p>
        </div>
        <div className="bg-[#F7F7F7] p-6 w-[21.5rem] h-[17.9rem] flex flex-col gap-4 border-2">
          <img src="/backend.svg" alt="" className="" width={50} />
          <p className="font-semibold">Back End</p>
          <img src="/underBreakLine.svg" alt="" className="" width={100} />
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout
          </p>
        </div>
        <div className="bg-[#F7F7F7] p-6 w-[21.5rem] h-[17.9rem] flex flex-col gap-4 border-2">
          <img src="/mobileDev.svg" alt="" className="" width={50} />
          <p className="font-semibold">Mobile Developer</p>
          <img src="/underBreakLine.svg" alt="" className="" width={100} />
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout
          </p>
        </div>
        <div className="bg-[#F7F7F7] p-6 w-[21.5rem] h-[17.9rem] flex flex-col gap-4 border-2">
          <img src="/mobileAssu.svg" alt="" className="" width={50} />
          <p className="font-semibold">Quality Assurance</p>
          <img src="/underBreakLine.svg" alt="" className="" width={100} />
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout
          </p>
        </div>
        <div className="bg-[#F7F7F7] p-6 w-[21.5rem] h-[17.9rem] flex flex-col gap-4 border-2">
          <img src="/devops.svg" alt="" className="" width={50} />
          <p className="font-semibold">DevOps</p>
          <img src="/underBreakLine.svg" alt="" className="" width={100} />
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
