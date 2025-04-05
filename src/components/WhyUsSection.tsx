import React from "react";

const WhyUsSection = () => {
  const features = [
    {
      title: "Verified properties",
      desc: "No fraud, no surprises."
    },
    {
      title: "Below Market Prices",
      desc: "Transparent, market-driven deals."
    },
    {
      title: "Loans, paperwork, registration",
      desc: "all covered."
    },
    {
      title: "From selection to post-sale",
      desc: "we've got you."
    }
  ];

  return (

      <div className="x-round-card transition-all duration-300 ease-in-out  h-container">
        <div className="max-w-[583px] mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.4264 2.5267L20.9458 0.0461426L18.4651 2.5267L20.9458 5.00726L23.4264 2.5267ZM0.322754 2.95635H20.9458V2.09706H0.322754V2.95635Z" fill="#050F27" />
            </svg>
            <p className="font-hanken text-sm text-[#050F27]">Why Us</p>
          </div>
          <h2 className="title">
            What Makes Housyy Special
          </h2>
        </div>

        <div className="flex gap-8 justify-between flex-wrap transition-all duration-500 ease-in-out">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[200px] max-w-[280px] flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative mb-6">
                <div className="w-[89px] h-[89px] rounded-full bg-[#ED1C24]/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#ED1C24] flex items-center justify-center shadow-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#050F27] font-poppins text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#050F27] font-poppins text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default WhyUsSection;
