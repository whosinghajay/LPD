import React from "react";

const GetInTouch = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-[-2rem] sm:mt-[8em] pb-[12rem] gap-12 bg-gradient-to-r from-[#000428] to-[#004e92]">
      <div className="flex flex-col justify-between items-center gap-1 pt-[6rem]">
        <p className="text-[#0A80DA] font-semibold text-xl">\Get in Touch\</p>
        <p className="text-white font-bold text-4xl">Hey! Let's Talk</p>
      </div>

      <div className="max-w-fit mr-auto ml-auto mt-10 flex flex-col md:flex-row xl:flex-row  gap-6">
        <div className="bg-white border rounded-xl">
          <form action="" className="flex flex-col gap-4 p-8">
            <input
              type="text"
              placeholder="Name"
              className="border-2 outline-none rounded-md bg-slate-50 pt-2 pb-2 pl-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 outline-none rounded-md bg-slate-50 pt-2 pb-2 pl-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border-2 outline-none rounded-md bg-slate-50 pt-2 pb-2 pl-2"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="border-2 outline-none rounded-md bg-slate-50 pt-2 pl-2 w-[16em] md:w-[20em] lg:w-[30em] xl:w-full"
              cols={80}
              rows={6}
            ></textarea>
            <button className="bg-[#0A80DA] text-md text-white pl-4 pr-4 pt-2 pb-2 border rounded-[10px] w-[7em]">
              Send Now
            </button>
          </form>
        </div>

        <div className="bg-white border rounded-xl p-8 w-[20rem] flex flex-col gap-4">
          <div className="">
            <div className="flex gap-5">
              <img src="/call.svg" alt="call" className="" />
              <div className="flex flex-col gap-">
                <p className="font-semibold text-lg text-[#0A80DA]">
                  Call Anytime
                </p>
                <div className="text-sm">
                  <p>+91 23678 27867</p>
                  <p>+91 67678 92878</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-5">
              <img src="/email.svg" alt="email" className="" width={32} />
              <div className="flex flex-col gap-">
                <p className="font-semibold text-lg text-[#0A80DA]">
                  Send Email
                </p>
                <div className="text-sm">
                  <p>connect@itfirms.com</p>
                  <p>hello@itfirms.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-5">
              <img src="/location.svg" alt="location" className="" width={32}/>
              <div className="flex flex-col gap-">
                <p className="font-semibold text-lg text-[#0A80DA]">Visit us</p>
                <div className="text-sm">
                  <p>20 Island Park Road</p>
                  <p>New Jearsy, New York, USA</p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold text-xl mx-auto pt-5 pb-2">Follow us</p>
          <div className="flex gap-4">
            <div>
              <img src="/linkedin.svg" alt="" className="bg-[#0A80DA] p-4 border rounded-lg" />
            </div>
            <div>
              <img src="instagram.svg" alt="" className="bg-[#0A80DA] p-4 border rounded-lg" />
            </div>
            <div>
              <img src="facebook.svg" alt="" className="bg-[#0A80DA] p-4 border rounded-lg px-5 transform scale-105" />
            </div>
            <div>
              <img src="/twitter.svg" alt="" className="bg-[#0A80DA] p-4 border rounded-lg transform scale-105" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;