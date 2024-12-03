import React from "react";
import { BiSolidMap } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Map from "../Map/Map";

const ContentInfo = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:gap-12 gap-8">
        <div className="lg:w-2/3 w-full">
          <h2 className="lg:text-4xl text-2xl font-rajdhani tracking-wider">
            Feel free to messege
          </h2>

          <div className="mt-8">
            <form className="w-full flex flex-col gap-6">
              <div className="flex lg:flex-row flex-col gap-6">
                <input
                  className="w-full border border-[#fff]/10 bg-transparent outline-none rounded px-4 py-4"
                  type="email"
                  placeholder="Your Email..."
                />
                <input
                  className="w-full border border-[#fff]/10 bg-transparent outline-none rounded px-4 py-4"
                  type="text"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <input
                  className="w-full border border-[#fff]/10 bg-transparent outline-none rounded px-4 py-4"
                  type="text"
                  placeholder="Your Address..."
                />
              </div>

              <div>
                <textarea
                  className="w-full border border-[#fff]/10 bg-transparent outline-none rounded px-4 py-4"
                  name=""
                  id=""
                  cols={4}
                  rows={6}
                  placeholder="Write Message.."
                ></textarea>
              </div>

              <div className="relative inline-block  overflow-hidden origin-right w-full text-center">
                <button className="relative flex items-center justify-center origin-right gap-2 py-3 px-6 bg-[#AE1A00] text-white font-rajdhani overflow-hidden group w-full text-center rounded">
                  <span className="relative z-10 text-center tracking-widest">
                    SEND NOW
                  </span>
                  <div className="absolute inset-0 w-full h-full bg-[#9D0F02] origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <h2 className="lg:text-4xl text-2xl font-rajdhani tracking-wider">
            Get in touch
          </h2>
          <p className="text-[#fff]/60 leading-relaxed py-6">
            It is a long established fact that a reader will be distrol acted
            bioiiy desig the rea dablea contentIt is a long established fact
            that a reader will be
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <div>
              <p className="flex items-center gap-2">
                <span className="text-[#AE1A00]">
                  <BiSolidMap />
                </span>{" "}
                <span className="font-rajdhani tracking-wider">Address</span>
              </p>
              <p className="font-rajdhani tracking-wider py-2 text-[#fff]/60">
                Mirpur,Dhaka-1206,Bangladesh
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2">
                <span className="text-[#AE1A00]">
                  <MdEmail />
                </span>{" "}
                <span className="font-rajdhani tracking-wider">
                  Email Address
                </span>
              </p>
              <p className="font-rajdhani tracking-wider py-2 text-[#fff]/60">
                almamon757@gmail.com
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2">
                <span className="text-[#AE1A00]">
                  <FaPhoneAlt />
                </span>{" "}
                <span className="font-rajdhani tracking-wider">
                  Phone number
                </span>
              </p>
              <p className="font-rajdhani tracking-wider py-2 text-[#fff]/60">
                +8801746770324
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Map></Map>
      </div>
    </div>
  );
};

export default ContentInfo;
