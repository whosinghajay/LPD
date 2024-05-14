import React from "react";

const Header = () => {
  return (
    <div className="max-w-full shadow-lg">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center h-20">
          <div className="">
            <img src="/logo.svg" alt="logo" className="" />
          </div>

          <div className="flex font-semibold sm:gap-20 items-center">
            <ul className="flex gap-4 sm:gap-20 text-slate-700 font-bold">
              <li>Home</li>
              <li>Reviews</li>
              <li>Apply for Jobs</li>
              <li>Schedule a Call</li>
            </ul>
            <button className="hidden sm:block bg-[#0A80DA] text-white sm:px-5 sm:py-3 border rounded-lg">Hire Developers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
