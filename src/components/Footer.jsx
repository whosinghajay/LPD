import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#E2E2E2] lg:mt-[8em] flex flex-col lg:grid xl:grid grid-rows-1 grid-flow-col gap-6 pt-[5rem] px-[2rem] xl:px-[8rem] pb-[4rem]">
      <div className="flex flex-col gap-6">
        <img src="/logo.svg" alt="logo" width={200} />
        <p className="xl:w-[14em]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at
        </p>
      </div>

      <div className="flex gap-[0.5em] md:gap-[20em] lg:gap-[2em] xl:gap-[5em]">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl">Services</p>
          <img src="/underBreakLine.svg" alt="" className="" width={80} />
          <p className="">Web Design/Development</p>
          <p className="">App Development</p>
          <p className="">UI / UX Design</p>
          <p className="">Hubspot Integration</p>
          <p className="">Email Marketing</p>
          <p className="">Website Migration</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl">Career</p>
          <img src="/underBreakLine.svg" alt="" className="" width={80} />
          <div className="flex gap-4">
            <div className="">
              <img
                src="/react.svg"
                alt=""
                className="bg-[#0A80DA] p-2 border rounded-xl"
              />
            </div>
            <div>
              <p className="text-[#0A80DA] font-bold xl:text-lg">
                ReactJs Dev.
              </p>
              <p>1-5 Years of exp</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="">
              <img
                src="/wordpress.svg"
                alt=""
                className="bg-[#0A80DA] p-2 border rounded-xl"
              />
            </div>
            <div>
              <p className="text-[#0A80DA] font-bold xl:text-lg">
                Wordpress Dev.
              </p>
              <p>1-5 Years of exp</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="">
              <img
                src="/wix.svg"
                alt=""
                className="bg-[#0A80DA] p-2 pt-5 pb-5 border rounded-xl"
              />
            </div>
            <div>
              <p className="text-[#0A80DA] font-bold xl:text-lg">
                Python Developer
              </p>
              <p>1-5 Years of exp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl">Subscribe Us</p>
        <img src="/underBreakLine.svg" alt="" className="" width={80} />
        <p className="mt-4 text-lg xl:w-[12em]">
          It is a long established fact that a reader will be distracted by the
          readable
        </p>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Email"
            className="pl-4 pr-4 bg-[#E2E2E2] border-slate-500 border-2 pt-2 pb-2 rounded-xl"
          />
          <div className="flex flex-row-reverse">
            <button className="bg-[#0A80DA] text-white p-2 border rounded-xl pr-4 pl-4 w-[6em]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
