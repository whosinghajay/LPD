import React from "react";

const Header = () => {
  return (
    <div className="max-w-full shadow-lg">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row xl:flex-row justify-between items-center h-20 md:pl-4 xl:pl-0">
          <div className="">
            <img src="/logo.svg" alt="logo" className="" />
          </div>

          <div className="flex xl:font-semibold md:gap-5 xl:gap-20 items-center md:pr-4 xl:pr-0">
            <ul className="flex gap-4 xl:gap-20 text-slate-700 font-bold">
              <li>Home</li>
              <li>Reviews</li>
              <li>Apply for Jobs</li>
              <li>Schedule a Call</li>
            </ul>
            <button className="hidden md:block xl:block bg-[#0A80DA] text-white md:px-3 xl:px-5 md:py-2 xl:py-3 border rounded-lg">Hire Developers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
