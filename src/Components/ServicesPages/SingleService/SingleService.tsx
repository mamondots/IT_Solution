import React from "react";
import first from "@/assets/images/details-1.webp";
import first2 from "@/assets/images/details-2.webp";
import first3 from "@/assets/images/details-3.webp";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

const SingleService = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="lg:w-2/3 grid grid-cols-2 gap-6">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <Image
                className="rounded"
                src={first}
                alt="first"
                width={700}
                height={700}
              />
            </div>
            <div>
              <Image
                className="rounded"
                src={first2}
                alt="first2"
                width={700}
                height={700}
              />
            </div>
          </div>
          {/* Second Column */}
          <div>
            <div className="h-full">
              <Image
                className="rounded"
                src={first3}
                alt="first3"
                width={700}
                height={1000}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 border rounded border-[#fff]/20">
          <div>
            <div className="border-b border-[#fff]/20 py-4">
              <div className="px-8 py-4 flex items-center gap-4">
                <div className="px-4 py-4 bg-[#321717] rounded-full text-base text-[#B91202]">
                  <p>
                    <FaRegUser />
                  </p>
                </div>
                <div>
                  <p className="text-[#fff]/60">Client</p>
                  <h2 className="font-rajdhani text-lg">Sandi leo rakiul</h2>
                </div>
              </div>
            </div>

            <div className="border-b border-[#fff]/20 py-4">
              <div className="px-8 py-4 flex items-center gap-4">
                <div className="px-4 py-4 bg-[#321717] rounded-full text-base text-[#B91202]">
                  <p>
                    <FaDollarSign />
                  </p>
                </div>
                <div>
                  <p className="text-[#fff]/60">150000 USD</p>
                  <h2 className="font-rajdhani text-lg">
                    consulation real estate
                  </h2>
                </div>
              </div>
            </div>

            <div className="border-b border-[#fff]/20 py-4">
              <div className="px-8 py-4 flex items-center gap-4">
                <div className="px-4 py-4 bg-[#321717] rounded-full text-base text-[#B91202]">
                  <p>
                    <TbCategory2 />
                  </p>
                </div>
                <div>
                  <p className="text-[#fff]/60">Category</p>
                  <h2 className="font-rajdhani text-lg">
                    Planing, Real Estate
                  </h2>
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="px-8 py-4 flex items-center gap-4">
                <div className="px-4 py-4 bg-[#321717] rounded-full text-base text-[#B91202]">
                  <p>
                    <MdOutlineDateRange />
                  </p>
                </div>
                <div>
                  <p className="text-[#fff]/60">Date</p>
                  <h2 className="font-rajdhani text-lg">December 02,2024</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-6 text-[#fff]/60">
          <p className="py-6 leading-relaxed">
            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
            orper posu ere viverra .Aliquam eros justo, posuere lobortis non,
            vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper
            posue Aliquam eros justo, posuere lobortis non laoreet augue mattis
            fermentum laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet mat laoreet
            augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
            justo,
          </p>
          <p className="leading-relaxed">
            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
            orper posu ere viverra .Aliquam eros justo, posuere lobortis non,
            vive rra laoreet augue s fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper
            posue loborti vive
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 lg:gap-8 gap-4">
          <div>
            <p className="flex items-center gap-4">
              <span className="bg-[#B91202] rounded-full text-[#151515]">
                <IoMdCheckmark />
              </span>
              <span className="text-lg font-rajdhani">Best Emplementation</span>
            </p>
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              ished fact that a reader will be distrol acted bioiiy desig ished
              fact that a reader will acted bioiiy desig.
            </p>
          </div>

          <div>
            <p className="flex items-center gap-4">
              <span className="bg-[#B91202] rounded-full text-[#151515]">
                <IoMdCheckmark />
              </span>
              <span className="text-lg font-rajdhani">Best Emplementation</span>
            </p>
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              ished fact that a reader will be distrol acted bioiiy desig ished
              fact that a reader will acted bioiiy desig.
            </p>
          </div>

          <div>
            <p className="flex items-center gap-4">
              <span className="bg-[#B91202] rounded-full text-[#151515]">
                <IoMdCheckmark />
              </span>
              <span className="text-lg font-rajdhani">Best Emplementation</span>
            </p>
            <p className="py-4 text-[#fff]/60 leading-relaxed">
              ished fact that a reader will be distrol acted bioiiy desig ished
              fact that a reader will acted bioiiy desig.
            </p>
          </div>
        </div>

        <div className="">
          <p className="py-4 text-[#fff]/60 leading-relaxed">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis,
            viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam. justo, posuere lobortis,
            viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo posuere loborti ,
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
