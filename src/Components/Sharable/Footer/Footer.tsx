import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0B0B0B] text-white relative z-50 py-24 lg:px-16 md:px-16 px-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-rajdhani tracking-widest">
            Al <span className="text-[#B91202]">Mamon</span>
          </h2>
          <p className="text-[#fff]/60 leading-relaxed py-4">
            Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is
            out no our o dummy text.
          </p>
          <div className="bg-[#B91202]  py-4 rounded flex items-center justify-between w-[150px] my-4">
            <p className="border-r px-4 hover:scale-110 duration-300 cursor-pointer">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-r px-4 hover:scale-110 duration-300 cursor-pointer">
              <FaTwitter></FaTwitter>
            </p>
            <p className="px-4 hover:scale-110 duration-300 cursor-pointer">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
          </div>
        </div>
        <div className="lg:ml-12">
          <h2 className="text-xl font-rajdhani tracking-widest">
            Get Free Link
          </h2>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-1 text-[#fff]/60 cursor-pointer hover:text-[#fff] duration-300">
              <span className="text-xl text-[#fff]">
                <IoIosArrowForward />
              </span>
              <span>Software Development</span>
            </li>

            <li className="flex items-center gap-1 text-[#fff]/60 cursor-pointer hover:text-[#fff] duration-300">
              <span className="text-xl text-[#fff]">
                <IoIosArrowForward />
              </span>
              <span>Data Analytics</span>
            </li>

            <li className="flex items-center gap-1 text-[#fff]/60 cursor-pointer hover:text-[#fff] duration-300">
              <span className="text-xl text-[#fff]">
                <IoIosArrowForward />
              </span>
              <span>IT Consulting</span>
            </li>

            <li className="flex items-center gap-1 text-[#fff]/60 cursor-pointer hover:text-[#fff] duration-300">
              <span className="text-xl text-[#fff]">
                <IoIosArrowForward />
              </span>
              <span>UI/UX Design</span>
            </li>

            <li className="flex items-center gap-1 text-[#fff]/60 cursor-pointer hover:text-[#fff] duration-300">
              <span className="text-xl text-[#fff]">
                <IoIosArrowForward />
              </span>
              <span>Network Solutions</span>
            </li>

            <li className="flex items-center gap-1 text-[#fff]/60 cursor-pointer hover:text-[#fff] duration-300">
              <span className="text-xl text-[#fff]">
                <IoIosArrowForward />
              </span>
              <span>Others</span>
            </li>
          </ul>
        </div>
        <div className="lg:ml-8">
          <h2 className="text-xl font-rajdhani tracking-widest">Address</h2>
          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <p className="p-2 text-xl bg-[#1A1A1C] text-[#B91202] rounded">
                <RiMapPin2Fill />
              </p>
              <p className="text-base text-[#fff]/60">
                Mirpur,House-20,Dhaka-1206,Banglades
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="p-2 text-xl bg-[#1A1A1C] text-[#B91202] rounded">
                <MdEmail />
              </p>
              <p className="text-base text-[#fff]/60">almamon757@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <p className="p-2 text-xl bg-[#1A1A1C] text-[#B91202] rounded">
                <FaPhoneAlt />
              </p>
              <p className="text-base text-[#fff]/60">+8801746770324</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-6">
          <h2 className="text-xl font-rajdhani tracking-widest">Recent Blog</h2>

          <p className="text-[#fff]/60 leading-relaxed py-4">
            Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is
            out no our o dummy text.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-[#fff]/20">
        <p className="mt-4 text-[#fff]/60">
          © almamon 2024 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
