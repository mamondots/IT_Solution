import React from "react";
import { bigItems } from "../../../../public/BigItems";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineFileCopy } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import autor from "@/assets/images/author-1.webp";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import Link from "next/link";

const BlogContent = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="lg:w-2/3 w-full">
        <div className="flex flex-col gap-8">
          {bigItems.map((item) => (
            <div key={item.title}>
              <div>
                <Image
                  className="rounded"
                  style={{ objectFit: "cover", width: "100%" }}
                  src={item.imgage}
                  alt="image"
                  width={700}
                  height={700}
                ></Image>
              </div>

              <div className="py-4">
                <div className="flex items-center lg:gap-6 gap-4 py-4 lg:text-base text-sm">
                  <p className="flex items-center gap-2  text-[#fff]/80 hover:text-[#B91202] duration-300 cursor-pointer">
                    <span className="text-[#B91202]">
                      <FaRegUser />
                    </span>{" "}
                    <span>By {item.user}</span>
                  </p>
                  <p className="flex items-center gap-2  text-[#fff]/80 hover:text-[#B91202] duration-300 cursor-pointer">
                    <span className="text-[#B91202]">
                      <MdOutlineFileCopy />
                    </span>{" "}
                    <span>Category</span>
                  </p>
                  <p className="flex items-center gap-2  text-[#fff]/80 hover:text-[#B91202] duration-300 cursor-pointer">
                    <span className="text-[#B91202]">
                      <FaRegComments />
                    </span>{" "}
                    <span>Comment ({item.comment})</span>
                  </p>
                </div>
                <div>
                  <Link href="/blogdetails">
                    <h2 className="lg:text-3xl text-2xl font-rajdhani border-b py-4  hover:text-[#B91202] duration-300 cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="py-4 mt-4 leading-loose text-[#fff]/80">
                    {item.description}
                  </p>
                  <Link href="/blogdetails">
                    <button className="flex items-center gap-2 mt-4  px-8 py-4 border border-[#B91202] hover:text-[#B91202] duration-300 rounded font-rajdhani tracking-wider">
                      <span>READ MORE</span>
                      <span className="text-[#B91202] text-xl">
                        <FiPlus />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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

export default BlogContent;
