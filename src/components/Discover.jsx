import React from "react";

const Discover = () => {
  return (
    <div className="flex flex-col justify-between items-center lg:gap-9 mt-[2.5rem] lg:mt-[6rem] xl:mt-[7rem]">
      <div className="flex flex-col justify-between items-center gap-1">
        <p className="text-[#0A80DA] font-semibold text-lg xl:text-xl">\Discover\</p>
        <p className="text-slate-800 font-bold text-3xl xl:text-4xl text-center">
          What you're looking for
        </p>
      </div>
      <div className="flex flex-col md:grid gap-4 xl:grid grid-rows-2 grid-flow-col xl:gap-6 transform scale-90 md:scale-[70%] lg:scale-90 xl:scale-100  mt-[-4em] md:mt-[-3em] lg:mt-0">
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
