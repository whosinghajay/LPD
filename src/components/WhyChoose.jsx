import React from "react";

const WhyChoose = () => {
  return (
    <div className="flex justify-between items-center mt-[8rem]">
      <div className="hidden w-[50%] sm:flex justify-between items-center">
        <img src="/groupP.svg" alt="group of people" width={500} className="relative left-[8.4rem]" />
      </div>
      <div className="sm:w-[50%] flex flex-col gap-6 relative top-[-2.4rem]">
        <div className="w-[100%] sm:w-[65%] flex flex-col items-center sm:items-start gap-2">
          <p className="text-[#0A80DA] font-semibold text-lg sm:text-xl">\We Choose\</p>
          <p className="text-slate-800 font-bold text-3xl sm:text-4xl mb-2">Our Company</p>
          <p className="tranform scale-95 sm:scale-100">
            We are invested in our people for the long term, supporting them to
            imagine and build towards the meaningful careers they aspire to. We
            support the development of our people, providing them with
            opportunities and tools for them to continuously develop and
            reinvent their skills and careers.
          </p>
        </div>
        <div className="w-[65%] grid grid-rows-2 grid-flow-col gap-4 tranform scale-95 sm:scale-100">
          <div className="flex gap-3 w-[11rem]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Top-Conveyance</p>
              <p className="">
                Proven Track record of delivering
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[11rem]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Potential-Talent</p>
              <p className="">
                Proven Track record of delivering
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[11rem]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Screening</p>
              <p className="">
                Proven Track record of delivering
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[11rem]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Ethical</p>
              <p className="">
                Proven Track record of delivering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
