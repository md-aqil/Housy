// components/FaqSection.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. We'll provide a free personalized onboarding call to help you get started fast.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade, downgrade, or cancel your plan at any time through your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer a no-questions-asked cancellation option. You can cancel anytime during the billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes. You can customize your invoices with company info, tax numbers, and notes.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill monthly or annually, depending on the plan you choose. You’ll be notified before each charge.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Simply go to account settings and update your email address. You’ll receive a confirmation link.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="h-container x-round-card">

      <h2 className="text-4xl md:text-6xl font-bold font-poppins text-center mb-12 text-[#050F27]">
        FAQs
      </h2>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#EAECF0] pb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#101828] font-inter">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <ChevronUp className="text-red-600" />
              ) : (
                <ChevronDown className="text-red-600" />
              )}
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#667085] text-base font-inter mt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
