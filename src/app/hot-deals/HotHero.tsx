import { Search } from "lucide-react";
import React from "react";
import MainSearch from './MainSearch';
import Header from "@/components/Header";

const HotDealsSection = () => {

  return (
    <div className="w-full">
      <Header />
      <div className="h-container md:px-20">
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-white text-center font-rubik text-4xl md:text-5xl font-bold leading-normal tracking-[0.1px] mb-10 sm:mb-16">
            What is Housyy Hot Deals?
          </h2>

          <div className="flex justify-center items-center gap-15  flex-wrap">
           
              <div
                
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="relative w-[119px] h-[119px] mb-5">
                  <img src="./check.png" alt="" />
                </div>
                <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
                  Verified Title
                </p>
              </div>
              <img src="./plus.svg" alt="" />
              <div
                
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="relative w-[119px] h-[119px] mb-5">
                  <img src="./check.png" alt="" />
                </div>
                <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
                  Verified Title
                </p>
              </div>
              <img src="./plus.svg" alt="" />

              <div
                
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="relative w-[119px] h-[119px] mb-5">
                  <img src="./check.png" alt="" />
                </div>
                <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
                  Verified Title
                </p>
              </div>
              <img src="./equal.svg" alt="" />

              <div
                
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="relative w-[119px] h-[119px] mb-5">
                  <img src="./check.png" alt="" />
                </div>
                <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
                  Verified Title
                </p>
              </div>
           
          </div>


      
        </div>
        <MainSearch />
      </div>
    </div>
  );
};

export default HotDealsSection;