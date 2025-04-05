import React from "react";
import { motion } from "framer-motion";

const uspItems = [
  {
    title: "Families Looking for a Dream Home",
    description: "Spacious, secure, and well-connected.",
  },
  {
    title: "Investors",
    description: "High ROI potential, steady rental income, and future appreciation.",
  },
  {
    title: "Business Professionals",
    description: "Close to business districts, metro, and expressways.",
  },
  {
    title: "Second Home Buyers",
    description: "Perfect weekend home or long-term investment",
  },
];

export default function WhyChooseProperty() {
  return (
    <div className="w-full max-w-xl bg-white rounded-[30px] shadow-xl px-10 py-12">
              <div className="flex flex-col gap-6">
                {uspItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1"
                    >
                      <path
                        d="M4 12l4 4L20 4"
                        stroke="#00B57C"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-lg font-bold text-black">
                        {item.title}
                      </p>
                      <p className="text-base text-black/80">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <button className="bg-[#ED1C24] text-white px-8 py-3 rounded-lg hover:bg-[#c4161d]">
                  Grab Deal
                </button>
                <motion.div
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-base font-medium text-black">
                    Request a Callback
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 5l7 7-7 7"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
  );
}
