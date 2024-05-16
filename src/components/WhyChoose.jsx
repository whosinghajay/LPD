import React from "react";

const WhyChoose = () => {
  return (
    <div className="flex gap-4 mt-[2rem] lg:mt-[6rem] xl:mt-[7.5rem] xl:pl-[4rem]">
      <div className="md:w-[50%] xl:w-full hidden md:block">
        <img src="/groupP.svg" alt="group of people" width={800} className="md:p-2 lg:pl-[100px] xl:pl-[142px]" />
      </div>
      <div className="flex flex-col gap-4 xl:gap-[2em] md:w-[50%] xl:w-full lg:pr-[40px] xl:pr-[300px]">
        <div className="flex flex-col gap-[0.15em]">
          <p className="text-[#0A80DA] font-semibold text-xl md:pt-[18px] text-center md:text-start">
            \We Choose\
          </p>
          <p className="text-slate-800 font-bold text-3xl xl:text-4xl text-center md:text-start">
            Our Company
          </p>
          <p className="text-center md:text-start w-[100%] px-[1px] lg:leading-7 xl:pt-2">
            We are invested in our people for the long term, supporting them to
            imagine and build towards the meaningful careers they aspire to. We
            support the development of our people, providing them with
            opportunities and tools for them to continuously develop and
            reinvent their skills and careers.
          </p>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-1">
          <div className="flex gap-1 w-[10.1em]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Top-Conveyance</p>
              <p className="">Proven Track record of delivering</p>
            </div>
          </div>
          <div className="flex gap-1 w-[10.1em]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Potential-Talent</p>
              <p className="">Proven Track record of delivering</p>
            </div>
          </div>
          <div className="flex gap-1 w-[10.1em]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Screening</p>
              <p className="">Proven Track record of delivering</p>
            </div>
          </div>
          <div className="flex gap-1 w-[10.1em]">
            <div className="max-w-fit my-auto">
              <img src="/potTalent.svg" alt="topConv" width={60} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#0A80DA]">Ethical</p>
              <p className="">Proven Track record of delivering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
