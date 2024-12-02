import React from "react";
import { CiSearch, CiSquareChevRight } from "react-icons/ci";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegComments,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { BiLabel } from "react-icons/bi";

import autor from "@/assets/images/author-1.webp";
import main from "@/assets/images/blog-lg-3.webp";
import main2 from "@/assets/images/blog-details-2.webp";
import Image from "next/image";
import { MdOutlineFileCopy } from "react-icons/md";
const SingleBlog = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="lg:w-2/3 w-full">
        <div>
          <div>
            <Image
              className="rounded"
              style={{ objectFit: "cover", width: "100%" }}
              src={main}
              alt="image"
              width={700}
              height={700}
            ></Image>
          </div>
          <div className="flex items-center lg:gap-6 gap-4 py-4 lg:text-base text-sm border-b border-[#fff]/20">
            <p className="flex items-center gap-2 text-[#fff]/80 hover:text-[#B91202] duration-300 cursor-pointer">
              <span className="text-[#B91202]">
                <FaRegUser />
              </span>{" "}
              <span>By Admin</span>
            </p>
            <p className="flex items-center gap-2 text-[#fff]/80 hover:text-[#B91202] duration-300 cursor-pointer">
              <span className="text-[#B91202]">
                <MdOutlineFileCopy />
              </span>{" "}
              <span>Category</span>
            </p>
            <p className="flex items-center gap-2 text-[#fff]/80 hover:text-[#B91202] duration-300 cursor-pointer">
              <span className="text-[#B91202]">
                <FaRegComments />
              </span>{" "}
              <span>Comment (5)</span>
            </p>
          </div>

          <p className="py-4 text-[#fff]/60 leading-relaxed mt-4">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
            viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            non, viverra laoreet augue mattis.Aliquam eros justo, posuere
            loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
            eros justo, posuere lobortis, viverra laoreet augue mattis fermentum
            ullamcorper viverra laoreet Aliquam eros justo, posuere loborti
            viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
            justo, posuere lobortis non, viverra laoreet augue mattis
            ullamcorper posuere viverra laoreet augue mattis.
          </p>

          <div className="bg-[#1B1A1D] rounded px-10 py-10 border border-[#fff]/10 mt-8">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="p-4 bg-[#141416] rounded-full text-[#B91202]">
                <FaQuoteRight />
              </p>
              <p className="py-4 text-[#fff]/60 leading-relaxed text-xl font-rajdhani">
                With a commitment to driving technological evolution, our IT
                solutions and services are the cornerstone of your digital
                progression. We transcend boundaries, enabling businesses to not
              </p>
              <div className="py-2">
                <h2 className="text-2xl font-rajdhani tracking-wider">
                  Stanio lainto
                </h2>
                <p className="text-[#fff]/60 py-2">Authore</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
              non, viverra laoreet augue mattis fermentum ullamcorper viverra
              laoreet Aliquam eros justo, posuere.
            </p>
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
              non.
            </p>
          </div>

          <div className="mt-8">
            <Image
              className="rounded"
              style={{ objectFit: "cover", width: "100%" }}
              src={main2}
              alt=""
              width={700}
              height={700}
            ></Image>
          </div>

          <div className="mt-8">
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              Aliquam eros justo, posuere loborti viverra lao ullamcorper
              posuere viverra .Aliquam eros justo, posuere lobortis non, viverra
              laoreet augue mattis start fermentum ullamcor viverra laoreet By
              Admin . Creativity . 28th February 2022 . Leave a comment viverra
              laoreet augue mattis start fermentum star.
            </p>
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
              non.
            </p>
          </div>

          <div className="bg-[#1B1A1D] rounded px-10 py-10 border border-[#fff]/10 mt-8">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[#fff]/60">
                <span className="text-[#B91202]">
                  <BiLabel />
                </span>
                <span>Marketing, branding, corporate, business</span>
              </p>
              <div className="flex items-center gap-4 text-[#B91202]">
                <p className="hover:translate-y-[-4px] duration-300 cursor-pointer">
                  <FaFacebookF></FaFacebookF>
                </p>
                <p className="hover:translate-y-[-4px] duration-300 cursor-pointer">
                  <FaTwitter></FaTwitter>
                </p>
                <p className="hover:translate-y-[-4px] duration-300 cursor-pointer">
                  <FaLinkedinIn></FaLinkedinIn>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="py-4">
              <h2 className="lg:text-6xl text-3xl font-rajdhani tracking-wide">
                Leave a comment
              </h2>
              <p className="py-2 text-[#fff]/60">
                You must have to log in for comment
              </p>
            </div>

            <div className="mt-4">
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
                    cols="4"
                    rows="6"
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
        </div>
      </div>
      <div className="lg:w-1/3 w-full">
        <div className="bg-[#1B1A1D] rounded px-10 py-10 border border-[#fff]/10">
          <div className="flex flex-col justify-center items-center text-center">
            <Image src={autor} alt="autor"></Image>
            <h2 className="font-rajdhani tracking-wider lg:text-3xl text-2xl py-4">
              Naturials paul
            </h2>
            <p className="text-[#fff]/60 leading-loose">
              Aliquam eros justo, posuere lobort viverra lao ullamcorper posuere
              viverra .Aliquam eros justo, posuere lobortis non
            </p>
            <div className="flex items-center gap-2 mt-4">
              <p className="hover:text-[#B91202] hover:translate-y-[-4px] cursor-pointer duration-300">
                <FaFacebookF></FaFacebookF>
              </p>
              <p>-</p>
              <p className="hover:text-[#B91202] hover:translate-y-[-4px] cursor-pointer duration-300">
                <FaTwitter></FaTwitter>
              </p>
              <p>-</p>
              <p className="hover:text-[#B91202] hover:translate-y-[-4px] cursor-pointer duration-300">
                <FaLinkedinIn></FaLinkedinIn>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1B1A1D] rounded px-10 py-10 border border-[#fff]/10 mt-8">
          <h2 className="text-2xl font-rajdhani tracking-wider">Searach</h2>
          <div className="mt-4">
            <form className="bg-[#141416] flex items-center justify-between rounded">
              <input
                className="bg-transparent outline-none px-4"
                type="text"
                placeholder="Your Name.."
              />
              <p className="bg-[#B91202] py-4 px-4 text-2xl rounded-r cursor-pointer">
                <CiSearch />
              </p>
            </form>
          </div>
        </div>

        <div className="bg-[#1B1A1D] rounded px-10 py-10 border border-[#fff]/10 mt-8">
          <h2 className="text-2xl font-rajdhani tracking-wider">Category</h2>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-[#fff]/60 flex items-center gap-2 hover:text-[#B91202] duration-300 cursor-pointer border-b border-[#fff]/20 pb-3">
              <span className="text-[#B91202]">
                <CiSquareChevRight />
              </span>
              <span>Genarel consturction</span>
            </p>
            <p className="text-[#fff]/60 flex items-center gap-2 hover:text-[#B91202] duration-300 cursor-pointer border-b border-[#fff]/20 pb-3">
              <span className="text-[#B91202]">
                <CiSquareChevRight />
              </span>
              <span>Business Advice</span>
            </p>
            <p className="text-[#fff]/60 flex items-center gap-2 hover:text-[#B91202] duration-300 cursor-pointer border-b border-[#fff]/20 pb-3">
              <span className="text-[#B91202]">
                <CiSquareChevRight />
              </span>
              <span>Stock market</span>
            </p>
            <p className="text-[#fff]/60 flex items-center gap-2 hover:text-[#B91202] duration-300 cursor-pointer border-b border-[#fff]/20 pb-3">
              <span className="text-[#B91202]">
                <CiSquareChevRight />
              </span>
              <span>Regular start</span>
            </p>
            <p className="text-[#fff]/60 flex items-center gap-2 hover:text-[#B91202] duration-300 cursor-pointer  pb-3">
              <span className="text-[#B91202]">
                <CiSquareChevRight />
              </span>
              <span>Basic consturction</span>
            </p>
          </div>
        </div>

        <div className="bg-[#1B1A1D] rounded px-10 py-10 border border-[#fff]/10 mt-8">
          <h2 className="text-2xl font-rajdhani tracking-wider">Tags</h2>

          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <p className="bg-[#141416] border border-[#fff]/10  text-[#fff]/60 hover:bg-[#B91202] hover:text-[#fff] cursor-pointer duration-300 p-3 rounded font-rajdhani">
              All Project
            </p>
            <p className="bg-[#141416] border border-[#fff]/10  text-[#fff]/60 hover:bg-[#B91202] hover:text-[#fff] cursor-pointer duration-300 p-3 rounded font-rajdhani">
              Stand
            </p>
            <p className="bg-[#141416] border border-[#fff]/10  text-[#fff]/60 hover:bg-[#B91202] hover:text-[#fff] cursor-pointer duration-300 p-3 rounded font-rajdhani">
              Regularly
            </p>
            <p className="bg-[#141416] border border-[#fff]/10  text-[#fff]/60 hover:bg-[#B91202] hover:text-[#fff] cursor-pointer duration-300 p-3 rounded font-rajdhani">
              Startup
            </p>
            <p className="bg-[#141416] border border-[#fff]/10  text-[#fff]/60 hover:bg-[#B91202] hover:text-[#fff] cursor-pointer duration-300 p-3 rounded font-rajdhani">
              Productsline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
