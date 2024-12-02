import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import sideImage from "@/assets/images/side.webp";
import mainImage from "@/assets/images/main-image-1.webp";
import Image2 from "@/assets/images/image-2.webp";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const SingleProject = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="lg:w-1/3 w-full">
        <div className="bg-[#0B0B0B] rounded px-10 py-10 border border-[#fff]/10">
          <h2 className="font-rajdhani text-2xl">Our Service</h2>

          <div className="flex flex-col gap-4 py-6 text-[#fff]/50 cursor-pointer">
            <div className="flex items-center justify-between hover:text-[#B91202] duration-300">
              <p>AI Insights Pro</p>
              <p>
                <HiArrowLongRight />
              </p>
            </div>

            <div className="flex items-center justify-between hover:text-[#B91202] duration-300">
              <p>Tech Armor Security</p>
              <p>
                <HiArrowLongRight />
              </p>
            </div>

            <div className="flex items-center justify-between hover:text-[#B91202] duration-300">
              <p>Blockchain Forge</p>
              <p>
                <HiArrowLongRight />
              </p>
            </div>

            <div className="flex items-center justify-between hover:text-[#B91202] duration-300">
              <p>DigitalIQ Consulting</p>
              <p>
                <HiArrowLongRight />
              </p>
            </div>

            <div className="flex items-center justify-between hover:text-[#B91202] duration-300">
              <p>RapidApp Innovate</p>
              <p>
                <HiArrowLongRight />
              </p>
            </div>

            <div className="flex items-center justify-between hover:text-[#B91202] duration-300">
              <p>RoboLogic Labs</p>
              <p>
                <HiArrowLongRight />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 relative">
          <Image
            className="rounded-md"
            src={sideImage}
            alt="sideImage"
            width={500}
            height={500}
          ></Image>
          <div
            className="w-full h-full absolute top-0 left-0 rounded-md inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(185, 18, 2,0.5) 40%, rgba(185, 18, 2,0.7) 70%)",
            }}
          >
            <div className="flex items-center justify-center flex-col pt-40">
              <p className="bg-[#B91202] text-[#fff] p-4 rounded-full text-xl border border-[#fff]/40">
                <FaPhoneAlt />
              </p>
              <p className="mt-4">Need help? contact our experts</p>
              <p className="text-xl font-rajdhani py-2">+8801746770324</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0B0B] rounded px-10 py-10 border border-[#fff]/10 mt-8">
          <h2 className="font-rajdhani text-2xl">Search Service</h2>

          <div className="mt-4">
            <form className="flex items-center gap-2">
              <input
                className="px-4 py-2 border border-[#fff]/20 outline-none rounded bg-transparent"
                type="text"
                placeholder="Search..."
              />
              <div className="relative lg:inline-block hidden overflow-hidden origin-right">
                <button className="relative flex items-center origin-right gap-2 py-2 px-4 rounded tracking-wider bg-[#AE1A00] text-white font-rajdhani overflow-hidden group">
                  <span className="relative z-10">SEARCH</span>
                  <div className="absolute inset-0 w-full h-full bg-[#9D0F02] origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-[#0B0B0B] rounded px-10 py-10 border border-[#fff]/10 mt-8">
          <p className="text-[#fff]/60 leading-relaxed">
            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
            per posu ere viverra .Aliquam os justo, posuere lobortis non, vive
            rra oreet augue mattis ferment ullam corper viverra laoreet vive rra
          </p>
        </div>
      </div>
      <div className="lg:w-2/3 w-full">
        <div>
          <Image
            className="rounded"
            style={{ objectFit: "cover", width: "100%" }}
            src={mainImage}
            alt="mainImage"
            width={700}
            height={700}
          ></Image>

          <div>
            <div className="mt-6 text-[#fff]/60">
              <p className="py-6 leading-relaxed">
                Aliquam eros justo, posuere loborti viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non,
                viverra laoreet augue mattis start fermentum ullamcor viverra
                laoreet By Admin . Creativity . 28th February 2022 . Leave a
                comment viverra laoreet augue mattis start fermentum start
                fermentum ullamcor laoreet augue mattis start fermentum ullamcor
                viverra laoreet.
              </p>
              <p className="leading-relaxed">
                Aliquam eros justo, posuere loborti viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non,
                viverra laoreet augue mattis start fermentum ullamcor viverra
                laoreet By Admin . Creativity . 28th February 2022 . Leave a
                comment viverra laoreet augue mattis start fermentum start
                fermentum
              </p>
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-6">
              <div>
                <Image
                  className="rounded"
                  src={Image2}
                  alt="Image2"
                  width={500}
                  height={500}
                ></Image>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="flex items-center gap-4">
                    <span className="bg-[#B91202] rounded-full text-[#151515]">
                      <IoMdCheckmark />
                    </span>
                    <span className="text-lg font-rajdhani">
                      Best Emplementation
                    </span>
                  </p>
                  <p className="py-4 text-[#fff]/60 leading-relaxed">
                    ished fact that a reader will be distrol acted bioiiy desig
                    ished fact that a reader will acted bioiiy desig.
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-4">
                    <span className="bg-[#B91202] rounded-full text-[#151515]">
                      <IoMdCheckmark />
                    </span>
                    <span className="text-lg font-rajdhani">
                      Best Emplementation
                    </span>
                  </p>
                  <p className="py-4 text-[#fff]/60 leading-relaxed">
                    ished fact that a reader will be distrol acted bioiiy desig
                    ished fact that a reader will acted bioiiy desig.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 text-[#fff]/60">
              <p className="leading-relaxed">
                Aliquam eros justo, posuere loborti viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non,
                viverra laoreet augue mattis start fermentum ullamcor viverra
                laoreet By Admin . Creativity . 28th February 2022 . Leave a
                comment viverra laoreet augue mattis start fermentum start
                fermentum
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-rajdhani">Best Emplementation</h2>
                <p className="py-2 text-[#fff]/60">
                  ished fact that a reader will be distrol acted bioiiy desig
                  the.ished fact that a reader will be distrol acted bioiiy
                  bioiiy desig the.ished fact that a reader.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-rajdhani">Best Emplementation</h2>
                <p className="py-2 text-[#fff]/60">
                  ished fact that a reader will be distrol acted bioiiy desig
                  the.ished fact that a reader will be distrol acted bioiiy
                  bioiiy desig the.ished fact that a reader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
